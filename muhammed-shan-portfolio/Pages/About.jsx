import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Image from '../src/assets/muhammedshan2.JPG';
import { useTheme } from '../src/ThemeContext';

const AboutPage = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    'Python', 'Django', 'Django REST Framework', 'React', 'JavaScript',
    'PostgreSQL', 'MongoDB', 'REST APIs', 'System Design', 'Git', 'AWS'
  ];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode
      ? 'bg-[#050505] text-[#a1a1a1] selection:bg-white selection:text-black'
      : 'bg-[#fafafa] text-neutral-600 selection:bg-black selection:text-white'
      } font-sans antialiased`}>

      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 mt-16 md:mt-24 w-full">
        <h1 className={`text-[28px] md:text-[40px] font-extrabold mb-12 transition-colors ${isDarkMode ? 'text-white' : 'text-black'
          }`}>
          About me<span className="text-blue-500">.</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Enhanced Profile Image Section */}
          <div className="flex-shrink-0 sticky top-24">
            <div className={`relative group w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 transition-all duration-700 ${isDarkMode
              ? 'border-[#1a1a1a] shadow-2xl shadow-blue-500/10'
              : 'border-neutral-200 shadow-xl shadow-neutral-200'
              }`}>
              
              {/* Overlay for depth */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img 
                src={Image} 
                alt="Muhammed Shan" 
                className={`w-full h-full object-cover object-center transition-all duration-1000 transform group-hover:scale-110 ${
                  isDarkMode ? 'grayscale group-hover:grayscale-0' : 'grayscale-0'
                }`} 
              />
            </div>
            
            {/* Status Indicator */}
            <div className="mt-6 flex items-center gap-2 px-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[12px] font-medium tracking-wide uppercase opacity-70">Available for new opportunities</span>
            </div>
          </div>

          <div className="max-w-2xl space-y-16">
            {/* Professional Identity */}
            <section className="space-y-6">
              <p className={`text-[17px] md:text-[20px] leading-relaxed font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>
                I am a <span className="font-bold border-b-2 border-blue-500">Full Stack Developer</span> specialized in architecting end-to-end digital products.
              </p>
              <p className="text-[15px] md:text-[16px] leading-relaxed opacity-80">
                I bridge the gap between complex backend logic and seamless user interfaces. My mission is to transform raw concepts into scalable, production-ready applications that deliver immediate functional value and long-term stability.
              </p>
            </section>

            {/* Value Proposition Grid */}
            <section className="space-y-8">
              <h2 className={`text-[12px] font-black uppercase tracking-[0.3em] ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                Strategic Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <h3 className={`text-[16px] font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    01. Full-Cycle Engineering
                  </h3>
                  <p className="text-[14px] leading-relaxed opacity-70">
                    From initial database schema design to final deployment, I maintain complete ownership of the technical stack.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-[16px] font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    02. Scalable Foundations
                  </h3>
                  <p className="text-[14px] leading-relaxed opacity-70">
                    I build with the future in mind, ensuring codebases are maintainable, modular, and ready for high-traffic growth.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className={`text-[16px] font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    03. User-Centric Logic
                  </h3>
                  <p className="text-[14px] leading-relaxed opacity-70">
                    Performance isn't just about speed; it's about creating intuitive experiences that solve real user pain points.
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="pb-24">
              <h2 className={`text-[12px] font-black mb-8 uppercase tracking-[0.3em] ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>
                Technical Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 border rounded-xl text-[13px] font-semibold transition-all duration-300 ${isDarkMode
                      ? 'border-[#1a1a1a] bg-[#0a0a0a] text-[#888] hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5'
                      : 'border-neutral-200 bg-white text-neutral-500 hover:text-black hover:border-blue-500/50 hover:shadow-md'
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