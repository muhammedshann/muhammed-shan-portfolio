import React from 'react';
import Header from '../src/Components/Header';
import Image from '../src/assets/MuhammedShan.jpeg';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-[#888888]' : 'bg-white text-neutral-600'
    } font-sans antialiased`}>
      
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 mt-20 md:mt-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 w-full">
        <div className="flex-1 pt-4 order-2 md:order-1">
          <h1 className={`text-[36px] md:text-[42px] font-bold leading-tight mb-2 transition-colors ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            Muhammed shan
          </h1>
          <h2 className="text-[18px] mb-8 font-medium">Software Engineer</h2>
          <p className="text-[15px] leading-relaxed max-w-md mb-10">
            I build reliable, scalable web apps with clean architecture and 
            a disciplined approach to UX.
          </p>

          <div className="flex gap-3">
            <button className={`px-5 py-2 border text-[13px] font-medium rounded-md transition-all ${
              isDarkMode ? 'border-[#222] text-white hover:bg-[#111]' : 'border-neutral-200 text-black hover:bg-neutral-50'
            }`}>
              View My Work
            </button>
            <button className={`px-5 py-2 border text-[13px] font-medium rounded-md transition-all ${
              isDarkMode ? 'border-[#222] text-white hover:bg-[#111]' : 'border-neutral-200 text-black hover:bg-neutral-50'
            }`}>
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className={`w-[300px] h-[300px] md:w-[380px] md:h-[380px] overflow-hidden rounded-2xl border transition-colors ${
            isDarkMode ? 'border-[#222]' : 'border-neutral-200 shadow-sm'
          }`}>
            <img 
              src={Image} 
              alt="Muhammed Shan" 
              className={`w-full h-full object-cover transition-all duration-700 ${
                isDarkMode ? 'grayscale' : 'grayscale-0'
              }`}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;