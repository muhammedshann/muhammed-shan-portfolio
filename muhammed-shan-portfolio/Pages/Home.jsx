import React from 'react';
import Header from '../src/Components/Header';
import Image from '../src/assets/MuhammedShan.jpeg';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const HomePage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#050505] text-[#a1a1a1] selection:bg-white selection:text-black' 
        : 'bg-[#fafafa] text-neutral-600 selection:bg-black selection:text-white'
    } font-sans antialiased`}>
      
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full py-12 md:py-0">
        
        {/* TEXT CONTENT */}
        <div className="flex-1 space-y-6 order-2 md:order-1 text-center md:text-left">
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[12px] font-medium transition-colors ${
            isDarkMode ? 'border-[#222] bg-[#111] text-blue-400' : 'border-neutral-200 bg-white text-blue-600 shadow-sm'
          }`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-2">
            <h1 className={`text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-tight transition-colors ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Muhammed <span className="text-blue-500">shan.</span>
            </h1>
            <h2 className={`text-[20px] md:text-[24px] font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Full Stack Developer
            </h2>
          </div>

          <p className="text-[16px] md:text-[18px] leading-relaxed max-w-md mx-auto md:mx-0">
            I specialize in building scalable web applications with 
            <span className={isDarkMode ? 'text-white' : 'text-black'}> Python, Django & React.</span> Focused on clean code and exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button 
              onClick={() => navigate("/projects/")} 
              className={`group flex items-center justify-center gap-2 px-8 py-3 text-[14px] font-medium rounded-xl transition-all ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-neutral-200' 
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate("/contact/")} 
              className={`flex items-center justify-center gap-2 px-8 py-3 border text-[14px] font-medium rounded-xl transition-all ${
                isDarkMode 
                  ? 'border-[#222] text-white hover:bg-[#111]' 
                  : 'border-neutral-200 text-black hover:bg-white shadow-sm'
              }`}
            >
              <Mail size={16} />
              Contact Me
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2 w-full max-w-[320px] md:max-w-none">
          <div className={`relative aspect-square w-full md:w-[400px] overflow-hidden rounded-[2rem] border transition-all duration-500 ${
            isDarkMode 
              ? 'border-[#1a1a1a] shadow-2xl shadow-blue-500/5' 
              : 'border-neutral-200 shadow-xl shadow-neutral-200'
          }`}>
            <img 
              src={Image} 
              alt="Muhammed Shan" 
              className={`w-full h-full object-cover transition-all duration-700 hover:scale-105 ${
                isDarkMode ? 'grayscale hover:grayscale-0' : 'grayscale-0'
              }`}
            />
            {/* Subtle Overlay Gradient */}
            <div className={`absolute inset-0 pointer-events-none ${
              isDarkMode 
                ? 'bg-gradient-to-t from-black/20 to-transparent' 
                : 'bg-gradient-to-t from-black/5 to-transparent'
            }`} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;