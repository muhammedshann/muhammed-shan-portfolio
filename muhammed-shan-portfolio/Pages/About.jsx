import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Image from '../src/assets/MuhammedShan.jpeg';
import { useTheme } from '../src/ThemeContext';

const AboutPage = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    'Python', 'Django', 'React', 'Javascript', 'PostgreSQL', 'MongoDB', 'Tailwind'
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#050505] text-[#a1a1a1] selection:bg-white selection:text-black' 
        : 'bg-[#fafafa] text-neutral-600 selection:bg-black selection:text-white'
    } font-sans antialiased`}>
      
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 mt-16 md:mt-24 w-full">
        {/* Title with Blue accent */}
        <h1 className={`text-[28px] md:text-[32px] font-bold mb-10 transition-colors ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          About me<span className="text-blue-500">.</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Profile Image Section */}
          <div className="flex-shrink-0">
            <div className={`relative w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border transition-all duration-500 ${
              isDarkMode 
                ? 'border-[#1a1a1a] shadow-2xl shadow-blue-500/5' 
                : 'border-neutral-200 shadow-lg shadow-neutral-200'
            }`}>
              <img 
                src={Image}
                alt="Muhammed Shan" 
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isDarkMode ? 'grayscale hover:grayscale-0' : 'grayscale-0'
                }`}
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="max-w-xl space-y-12">
            <section>
              <p className="text-[14px] md:text-[15px] leading-relaxed transition-colors opacity-90">
                Full-Stack Web Developer with hands-on experience from an intensive bootcamp and real-world project development. Strong in Python, Django, REST APIs, PostgreSQL, and React, with a solid foundation in backend logic, database design, and clean code practices. 
              </p>
              <p className="text-[14px] md:text-[15px] leading-relaxed mt-4 transition-colors opacity-90">
                Built end-to-end full-stack applications independently, including e-commerce and productivity platforms with secure authentication, payments, and scalable APIs. A fast learner eager to collaborate and build creative, reliable web solutions.
              </p>
            </section>

            {/* Skills & Tools */}
            <section className="pb-16">
              <h2 className={`text-[14px] font-semibold mb-6 uppercase tracking-wider transition-colors ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Skills & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1 border rounded-lg text-[12px] font-medium transition-all cursor-default ${
                      isDarkMode 
                      ? 'border-[#1a1a1a] bg-[#0a0a0a] text-[#888888] hover:border-blue-500/50 hover:text-white' 
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-blue-500/50 hover:text-black shadow-sm'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;