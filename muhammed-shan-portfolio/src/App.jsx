import React, { lazy, Suspense, useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShaderBackground from './Components/ui/ShaderBackground';
import { useTheme } from './useTheme';
import './App.css';

// Eagerly prefetch the HomePage chunk so it's ready when the shutter opens
const homeChunkPromise = import('../Pages/Home');
const HomePage = lazy(() => homeChunkPromise);

/* ------------------------------------------------------------------------------------------------
   IntroReel — fast-cut intro ("I CODE FOR MY FREEDOM") + movie shutter transition.
   Frame-by-frame cut list (30 fps): red Anton words on black, grainy B&W photos, inverted red block.
   Closing transition: top and bottom black bars close into the middle (movie ending close).
   Opening transition: seamless continuation where the bars open from the middle to top and bottom,
   revealing the home page with zero black pause or stillness.
------------------------------------------------------------------------------------------------ */
const INTRO_FPS = 30;
const PEXELS = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1080`;
const INTRO_PHOTOS = {
  coder: { src: PEXELS(1181326), pos: '50% 30%' },
  car: { src: PEXELS(33074675), pos: '36% 50%' },
  city: { src: PEXELS(13801783), pos: '50% 62%' },
  trails: { src: PEXELS(35291206), pos: '50% 55%' },
  watch: { src: PEXELS(380782), pos: '45% 45%' },
  cash: { src: PEXELS(928187), pos: '62% 50%' },
};

// [kind, content, frames]  p = photo, w = word, wi = inverted word (red block), b = black frame
const INTRO_SEQ = [
  ['p', 'coder', 5], ['w', 'CODE', 5], ['b', '', 1], ['p', 'car', 4], ['w', 'MY', 4], ['b', '', 1],
  ['p', 'city', 3], ['w', 'FREEDOM', 4], ['p', 'trails', 3], ['w', 'I', 2], ['p', 'coder', 2], ['w', 'CODE', 2],
  ['p', 'car', 1], ['wi', 'FOR', 3], ['p', 'watch', 1], ['w', 'MY', 2],
  // ---- the close (top + bottom bars meet in the middle) runs over these
  ['p', 'cash', 1], ['w', 'FREEDOM', 1], ['p', 'coder', 1], ['w', 'I', 1], ['p', 'city', 1], ['w', 'CODE', 1],
  ['p', 'trails', 2], ['w', 'FOR', 2], ['p', 'car', 2], ['w', 'MY', 2], ['p', 'watch', 2], ['w', 'FREEDOM', 2], ['p', 'cash', 2],
];

const INTRO_STARTS = INTRO_SEQ.reduce((acc, s, i) => { acc.push(i ? acc[i - 1] + INTRO_SEQ[i - 1][2] : 0); return acc; }, []);
const INTRO_FRAMES = INTRO_STARTS[INTRO_SEQ.length - 1] + INTRO_SEQ[INTRO_SEQ.length - 1][2]; // 63 frames

// Exact timing: closing finishes precisely at the final cut, then opening begins immediately
const CLOSE_START = 41 / INTRO_FPS;                 // frame 41 = 1.3667s
const CLOSE_DUR = (INTRO_FRAMES - 41) / INTRO_FPS;   // 22 frames = 0.7333s
const CLOSE_END = CLOSE_START + CLOSE_DUR;           // 2.100s: bars seal the middle
const OPEN_DUR = 0.70;                               // 0.700s: bars open to reveal the home page
const TOTAL_DUR = CLOSE_END + OPEN_DUR;              // 2.800s: transition complete

// Anton letter widths (em) -> every word fills the screen width without overflowing
const LETTER_EM = { I: 0.27, M: 0.56, W: 0.62 };
const wordSize = (word) => {
  const em = [...word].reduce((n, c) => n + (LETTER_EM[c] ?? 0.47) + 0.02, 0);
  return `min(${word === 'I' ? 78 : 72}vh, ${(92 / em).toFixed(2)}vw)`;
};

const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

const IntroReel = ({ onDone }) => {
  const [ready, setReady] = useState(false);
  const [t, setT] = useState(0);
  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
    []
  );

  // 1) Preload photos + Anton font
  useEffect(() => {
    let alive = true;
    const imgs = Object.values(INTRO_PHOTOS).map(({ src }) => {
      const img = new Image();
      img.src = src;
      return img.decode ? img.decode().catch(() => {}) : new Promise((r) => { img.onload = img.onerror = r; });
    });
    const font = document.fonts?.load ? document.fonts.load('400 100px "Anton"').catch(() => {}) : Promise.resolve();
    const cap = new Promise((r) => setTimeout(r, 2500));
    Promise.race([Promise.all([...imgs, font]), cap]).then(() => alive && setReady(true));
    return () => { alive = false; };
  }, []);

  // 2) Play on real clock (frame-accurate across 60/90/120 Hz screens)
  useEffect(() => {
    if (!ready) return undefined;
    if (reduceMotion) {
      const id = setTimeout(() => onDone?.(), 700);
      return () => clearTimeout(id);
    }
    let raf;
    let finished = false;
    const t0 = performance.now();
    const tick = (now) => {
      const el = (now - t0) / 1000;
      if (el >= TOTAL_DUR) {
        setT(TOTAL_DUR);
        if (!finished) {
          finished = true;
          onDone?.();
        }
        return;
      }
      setT(el);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [ready, reduceMotion, onDone]);

  const isOpening = t >= CLOSE_END;

  // Scale of the two black shutter bars:
  // - Closing: 0 -> 1 (bars meet at middle)
  // - Opening: 1 -> 0 (bars part outward from middle)
  let barScale = 0;
  if (!isOpening) {
    if (t >= CLOSE_START) {
      const p = Math.min(1, Math.max(0, (t - CLOSE_START) / CLOSE_DUR));
      barScale = easeInOutCubic(p);
    }
  } else {
    const p = Math.min(1, Math.max(0, (t - CLOSE_END) / OPEN_DUR));
    barScale = Math.max(0, 1 - easeOutCubic(p));
  }

  // Fade out cut stage right as bars touch in middle
  const fadeFrom = CLOSE_START + CLOSE_DUR * 0.8;
  const stageOpacity = t > fadeFrom ? Math.max(0, 1 - (t - fadeFrom) / (CLOSE_DUR * 0.2)) : 1;

  const frame = Math.floor(t * INTRO_FPS);
  let idx = 0;
  for (let i = 0; i < INTRO_SEQ.length; i++) if (frame >= INTRO_STARTS[i]) idx = i;
  const shot = ready && frame < INTRO_FRAMES ? INTRO_SEQ[idx] : null;

  return (
    <div className={`ir-root${isOpening ? ' ir-opening' : ''}`} role="img" aria-label="I code for my freedom">
      {/* Preload images so fast cuts never stutter */}
      <div className="ir-preload" aria-hidden="true">
        {Object.entries(INTRO_PHOTOS).map(([k, p]) => <img key={k} src={p.src} alt="" />)}
      </div>

      {reduceMotion ? (
        <div className="ir-card"><span className="ir-word ir-stack">I CODE<br />FOR MY<br />FREEDOM.</span></div>
      ) : (
        <>
          {/* Fast-cut intro cards: visible during cuts, hidden the instant shutters seal */}
          {!isOpening && (
            <div className="ir-stage" style={{ opacity: stageOpacity }}>
              {shot && shot[0] === 'p' && (
                <div className="ir-card">
                  <img className="ir-photo" src={INTRO_PHOTOS[shot[1]].src} style={{ objectPosition: INTRO_PHOTOS[shot[1]].pos }} alt="" draggable="false" />
                </div>
              )}
              {shot && (shot[0] === 'w' || shot[0] === 'wi') && (
                <div className={`ir-card${shot[0] === 'wi' ? ' ir-inv' : ''}`}>
                  <span className="ir-word" style={{ fontSize: wordSize(shot[1]) }}>{shot[1]}</span>
                </div>
              )}
              <div className="ir-grain" aria-hidden="true" />
            </div>
          )}

          {/* Cinematic movie shutter: closes to middle, then immediately opens from middle */}
          <i className="ir-bar ir-top" style={{ transform: `scaleY(${barScale})` }} />
          <i className="ir-bar ir-bot" style={{ transform: `scaleY(${barScale})` }} />
        </>
      )}
    </div>
  );
};

const PageFallback = () => (
  <div className="min-h-screen bg-transparent" aria-hidden="true" />
);

export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Safety net: never keep visitors on intro longer than 5 seconds
    const timer = setTimeout(() => setIntroDone(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Lock scroll during intro and opening shutter transition
    if (!introDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introDone]);

  return (
    <div className="portfolio-root">
      {/* Home page & site content: pre-rendered beneath the shutter overlay */}
      <div className="main-content">
        {/* Persistent animated shader background — renders on all pages */}
        <ShaderBackground isDarkMode={isDarkMode} />

        {/* Page content floats above the background */}
        <div className="relative z-10">
          <BrowserRouter>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/why-me' element={<HomePage initialSection="why-me" />} />
                <Route path='/why-me/' element={<HomePage initialSection="why-me" />} />
                <Route path='/skills' element={<HomePage initialSection="why-me" />} />
                <Route path='/skills/' element={<HomePage initialSection="why-me" />} />
                <Route path='/about' element={<HomePage initialSection="about" />} />
                <Route path='/about/' element={<HomePage initialSection="about" />} />
                <Route path='/projects' element={<HomePage initialSection="projects" />} />
                <Route path='/projects/' element={<HomePage initialSection="projects" />} />
                <Route path='/contact' element={<HomePage initialSection="contact" />} />
                <Route path='/contact/' element={<HomePage initialSection="contact" />} />
                <Route path='*' element={<HomePage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>

      {/* Intro reel with seamless movie ending close & movie opening transition */}
      {!introDone && <IntroReel onDone={() => setIntroDone(true)} />}
    </div>
  );
}
