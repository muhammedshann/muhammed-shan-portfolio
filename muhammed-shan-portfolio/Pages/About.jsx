import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Image from '../src/assets/MuhammedShan.jpeg';
import { useTheme } from '../src/ThemeContext';

const AboutPage = () => {
  const { isDarkMode } = useTheme(); // Access global theme state

  const skills = [
    'Python', 'Django', 'React', 'Javascript', 'PostgreSQL', 'MongoDB', 'Tailwind'
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-[#888888]' : 'bg-white text-neutral-600'
    } font-sans antialiased`}>
      
      {/* 1. Navigation */}
      <Header />

      {/* 2. Main Content - flex-grow pushes footer down */}
      <main className="flex-grow max-w-4xl mx-auto px-6 mt-16 w-full">
        {/* Heading color updates with theme */}
        <h1 className={`text-[28px] font-bold mb-8 transition-colors ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          About
        </h1>

        {/* Profile Image - Border and Grayscale respond to theme */}
        <div className="mb-10">
          <div className={`w-32 h-32 rounded-full overflow-hidden border transition-colors ${
            isDarkMode ? 'border-[#222]' : 'border-neutral-200 shadow-sm'
          }`}>
            <img 
              src={Image}
              alt="Profile" 
              className={`w-full h-full object-cover transition-all duration-700 ${
                isDarkMode ? 'grayscale' : 'grayscale-0'
              }`}
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-[15px] leading-relaxed mb-10 transition-colors">
            I'm a software engineer with a focus on building thoughtful, resilient products. 
            I enjoy working across the stack, pairing straightforward interfaces with solid 
            engineering practices.
          </p>

          {/* Skills Section */}
          <section>
            <h2 className={`text-[16px] font-semibold mb-4 transition-colors ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Skills & Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className={`px-3 py-1.5 border rounded-md text-[13px] transition-all cursor-default ${
                    isDarkMode 
                    ? 'border-[#222] bg-[#0c0c0c] text-[#888888] hover:border-[#444]' 
                    : 'border-neutral-200 bg-neutral-50 text-neutral-600 hover:border-neutral-400'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;