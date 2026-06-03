import { useMemo, useState, useEffect, lazy, Suspense } from "react"

/**
 * Lazy-load MeshGradient so it doesn't block initial page render.
 * The WebGL shader loads in the background after the page is interactive.
 */
const LazyMeshGradient = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.MeshGradient,
  }))
)

/**
 * Detect if we should skip WebGL effects:
 * - Mobile devices (screen width ≤ 768px)
 * - Users who prefer reduced motion
 * - Devices with low GPU capability (< 4 logical cores as proxy)
 */
function canRenderShader() {
  if (typeof window === "undefined") {
    return false
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  const isMobile = window.innerWidth <= 768
  const isLowEnd = navigator.hardwareConcurrency
    ? navigator.hardwareConcurrency < 6
    : false
  const hasWeakMemory = navigator.deviceMemory ? navigator.deviceMemory <= 4 : false

  return !prefersReducedMotion && !isMobile && !isLowEnd && !hasWeakMemory
}

function useShouldRenderShader() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (!canRenderShader()) {
      return undefined
    }

    const startShader = () => setShouldRender(true)
    const idleId = window.requestIdleCallback
      ? window.requestIdleCallback(startShader, { timeout: 1600 })
      : window.setTimeout(startShader, 900)

    return () => {
      if (window.cancelIdleCallback && typeof idleId === "number") {
        window.cancelIdleCallback(idleId)
      } else {
        window.clearTimeout(idleId)
      }
    }
  }, [])

  return shouldRender
}

/**
 * CSS-only fallback gradient — lightweight, works everywhere.
 * Shown on mobile, low-end devices, or while the shader is loading.
 */
function GradientFallback({ isDarkMode }) {
  return (
    <div
      className="fixed inset-0 z-0 transition-colors duration-700"
      style={{
        background: isDarkMode
          ? "radial-gradient(ellipse at 30% 20%, #0a0a1a 0%, #050505 50%, #000000 100%)"
          : "radial-gradient(ellipse at 30% 20%, #f0f0f8 0%, #f5f5f5 50%, #fafafa 100%)",
      }}
      aria-hidden="true"
    />
  )
}

/**
 * ShaderBackground — Full-screen animated gradient background.
 *
 * Performance strategy:
 * - Lazy loads the WebGL shader (doesn't block first paint)
 * - Skips shader entirely on mobile / reduced-motion / low-end devices
 * - Shows a subtle CSS gradient fallback instead
 */
export default function ShaderBackground({ isDarkMode = true }) {
  const shouldRenderShader = useShouldRenderShader()
  const speed = 0.45

  // Theme-aware gradient colors
  const colors = useMemo(() => {
    if (isDarkMode) {
      return ["#000000", "#0a0a0a", "#1a1a2e", "#0f0f0f"]
    }
    return ["#f8f8f8", "#e8e8f0", "#f0f0f5", "#ffffff"]
  }, [isDarkMode])

  const backgroundColor = isDarkMode ? "#000000" : "#f5f5f5"

  // On mobile/low-end: show only the CSS gradient fallback
  if (!shouldRenderShader) {
    return <GradientFallback isDarkMode={isDarkMode} />
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Lazy-loaded WebGL shader with CSS fallback while loading */}
      <Suspense fallback={<GradientFallback isDarkMode={isDarkMode} />}>
        <LazyMeshGradient
          className="w-full h-full absolute inset-0"
          colors={colors}
          speed={speed}
          backgroundColor={backgroundColor}
        />
      </Suspense>

      {/* Subtle lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/3 w-32 h-32 rounded-full blur-3xl animate-pulse ${isDarkMode ? "bg-blue-500/5" : "bg-blue-300/10"
            }`}
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className={`absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full blur-2xl animate-pulse ${isDarkMode ? "bg-white/[0.02]" : "bg-indigo-200/10"
            }`}
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className={`absolute top-1/2 right-1/3 w-20 h-20 rounded-full blur-xl animate-pulse ${isDarkMode ? "bg-indigo-900/[0.03]" : "bg-purple-200/10"
            }`}
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>
    </div>
  )
}
