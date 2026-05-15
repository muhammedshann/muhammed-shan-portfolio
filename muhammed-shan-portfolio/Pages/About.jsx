import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Image from '../src/assets/MuhammedShanAbout.jpeg';
import { useTheme } from '../src/ThemeContext';

const AboutPage = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    'Python',
    'Django',
    'Django REST Framework',
    'React',
    'JavaScript',
    'PostgreSQL',
    'MongoDB',
    'REST APIs',
    'System Design',
    'Git',
    'AWS',
  ];

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode
          ? 'bg-[#050505] text-[#a1a1a1] selection:bg-white selection:text-black'
          : 'bg-[#fafafa] text-neutral-600 selection:bg-black selection:text-white'
        } font-sans antialiased`}
    >
      <Header />

      <main className="flex-grow max-w-5xl mx-auto px-6 mt-16 md:mt-24 w-full">
        {/* Heading */}
        <h1
          className={`text-[32px] md:text-[44px] font-extrabold mb-12 transition-colors ${isDarkMode ? 'text-white' : 'text-black'
            }`}
        >
          About me<span className="text-blue-500">.</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0 sticky top-24">
            <div
              className={`relative group w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 transition-all duration-700 ${isDarkMode
                  ? 'border-[#1a1a1a] shadow-2xl shadow-blue-500/10'
                  : 'border-neutral-200 shadow-xl shadow-neutral-200'
                }`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img
                src={Image}
                alt="Muhammed Shan"
                className="w-full h-full object-cover object-center transition-all duration-1000 transform group-hover:scale-110"
              />
            </div>

            {/* Status */}
            <div className="mt-6 flex items-center gap-2 px-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>

              <span className="text-[12px] font-medium tracking-wide uppercase opacity-70">
                Open to collaborations & opportunities
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl space-y-16">
            {/* Intro */}
            <section className="space-y-6">
              <p
                className={`text-[18px] md:text-[22px] leading-relaxed font-light ${isDarkMode ? 'text-white' : 'text-black'
                  }`}
              >
                I am a{' '}
                <span className="font-bold border-b-2 border-blue-500">
                  Full Stack Developer & Creative Builder
                </span>{' '}
                focused on crafting modern digital experiences that feel fast,
                intelligent, and visually impactful.
              </p>

              <p className="text-[15px] md:text-[16px] leading-relaxed opacity-80">
                I combine clean engineering with creative thinking to build
                products that are both functional and memorable. From responsive
                frontend interfaces to scalable backend systems, I focus on
                creating seamless digital experiences powered by modern
                technologies and thoughtful execution. My goal is not just to
                develop applications — but to create products people genuinely
                enjoy using.
              </p>
            </section>

            {/* Mindset */}
            <section className="space-y-8">
              <h2
                className={`text-[12px] font-black uppercase tracking-[0.3em] ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
              >
                Mindset & Approach
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card 1 */}
                <div className="space-y-2">
                  <h3
                    className={`text-[16px] font-bold ${isDarkMode ? 'text-white' : 'text-black'
                      }`}
                  >
                    01. Creative Problem Solving
                  </h3>

                  <p className="text-[14px] leading-relaxed opacity-70">
                    I focus on understanding the real problem before building
                    the solution. Every project starts with clarity, strategy,
                    and a strong user-first mindset.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="space-y-2">
                  <h3
                    className={`text-[16px] font-bold ${isDarkMode ? 'text-white' : 'text-black'
                      }`}
                  >
                    02. Modern Development
                  </h3>

                  <p className="text-[14px] leading-relaxed opacity-70">
                    I build scalable and maintainable applications using modern
                    frameworks, clean architecture, and efficient development
                    practices that support long-term growth.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="space-y-2">
                  <h3
                    className={`text-[16px] font-bold ${isDarkMode ? 'text-white' : 'text-black'
                      }`}
                  >
                    03. User Experience Focus
                  </h3>

                  <p className="text-[14px] leading-relaxed opacity-70">
                    Great products should feel effortless. I care deeply about
                    performance, smooth interactions, and creating interfaces
                    that users instantly connect with.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="space-y-2">
                  <h3
                    className={`text-[16px] font-bold ${isDarkMode ? 'text-white' : 'text-black'
                      }`}
                  >
                    04. Continuous Growth
                  </h3>

                  <p className="text-[14px] leading-relaxed opacity-70">
                    Technology evolves fast, and so do I. I constantly explore
                    new tools, frameworks, and ideas to stay ahead and deliver
                    modern solutions.
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="pb-24">
              <h2
                className={`text-[12px] font-black mb-8 uppercase tracking-[0.3em] ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
              >
                Tech Stack & Tools
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