import React, { useMemo, useState, useEffect, lazy, Suspense } from "react"

/**
 * Lazy-load MeshGradient so it doesn't block initial page render.
 * In light mode, renders warm ProjectOne off-white (#FAFAFA).
 * In dark mode, renders ProjectOne charcoal (#0C0D0B).
 */
const LazyMeshGradient = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.MeshGradient,
  }))
)

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

function GradientFallback({ isDarkMode }) {
  return (
    <div
      className="fixed inset-0 z-0 transition-colors duration-500 pointer-events-none"
      style={{
        backgroundColor: isDarkMode ? "#0C0D0B" : "#FAFAFA",
      }}
      aria-hidden="true"
    />
  )
}

export default function ShaderBackground({ isDarkMode = false }) {
  const shouldRenderShader = useShouldRenderShader()
  const speed = 0.35

  // ProjectOne palette: Warm off-white #FAFAFA in light mode, #0C0D0B in dark mode
  const colors = useMemo(() => {
    if (isDarkMode) {
      return ["#0C0D0B", "#11120F", "#161714", "#0C0D0B"]
    }
    return ["#FAFAFA", "#F7F7F5", "#F3F2EA", "#FAFAFA"]
  }, [isDarkMode])

  const backgroundColor = isDarkMode ? "#0C0D0B" : "#FAFAFA"

  if (!shouldRenderShader) {
    return <GradientFallback isDarkMode={isDarkMode} />
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <Suspense fallback={<GradientFallback isDarkMode={isDarkMode} />}>
        <LazyMeshGradient
          className="w-full h-full absolute inset-0 opacity-80"
          colors={colors}
          speed={speed}
          backgroundColor={backgroundColor}
        />
      </Suspense>

      {/* Subtle paper dot grid pattern matching ProjectOne */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: isDarkMode
            ? "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)"
            : "radial-gradient(rgba(19, 19, 17, 0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  )
}
