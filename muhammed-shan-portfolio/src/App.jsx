import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShaderBackground from './components/ui/ShaderBackground';
import { useTheme } from './useTheme';
import './App.css';

const HomePage = lazy(() => import('../Pages/Home'));
const AboutPage = lazy(() => import('../Pages/About'));
const ProjectsPage = lazy(() => import('../Pages/Projects'));
const ContactPage = lazy(() => import('../Pages/Contact'));
const MotionDiv = motion.div;
const MotionH1 = motion.h1;

const SnappyIntro = () => (
  <MotionDiv
    className="intro-container"
    exit={{
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.98
    }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="text-wrapper">
      <MotionH1
        className="intro-name"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        SHAN<span className="blue-dot">.</span>
      </MotionH1>
      <MotionDiv
        className="reveal-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  </MotionDiv>
);

const PageFallback = () => (
  <div className="min-h-screen bg-transparent" aria-hidden="true" />
);

export default function App() {
  const [showSite, setShowSite] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Keep the premium intro, but reveal the app before heavier effects start.
    const timer = setTimeout(() => setShowSite(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-root">
      <AnimatePresence mode="wait">
        {!showSite ? (
          <SnappyIntro key="intro" />
        ) : (
          <MotionDiv
            key="site"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="main-content"
          >
            {/* Persistent animated shader background — renders on all pages */}
            <ShaderBackground isDarkMode={isDarkMode} />

            {/* Page content floats above the background */}
            <div className="relative z-10">
              <BrowserRouter>
                <Suspense fallback={<PageFallback />}>
                  <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about/' element={<AboutPage />} />
                    <Route path='/projects/' element={<ProjectsPage />} />
                    <Route path='/contact/' element={<ContactPage />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}
