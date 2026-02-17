import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/Home';
import './App.css';

const SnappyIntro = () => (
  <motion.div 
    className="intro-container"
    exit={{ 
      opacity: 0, 
      filter: "blur(15px)", 
      scale: 0.98 
    }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="text-wrapper">
      <motion.h1 
        className="intro-name"
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        SHAN<span className="blue-dot">.</span>
      </motion.h1>
      <motion.div 
        className="reveal-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  </motion.div>
);

export default function App() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    // 1.8 seconds: Fast, premium, and efficient
    const timer = setTimeout(() => setShowSite(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio-root">
      <AnimatePresence mode="wait">
        {!showSite ? (
          <SnappyIntro key="intro" />
        ) : (
          <motion.div 
            key="site"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="main-content"
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}