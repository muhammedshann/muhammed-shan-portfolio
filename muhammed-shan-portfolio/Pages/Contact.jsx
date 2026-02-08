import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';

const ContactPage = () => {
  const { isDarkMode } = useTheme();
  const links = ['Email', 'LinkedIn', 'GitHub', 'Resume'];

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-[#888888]' : 'bg-white text-neutral-600'
    } font-sans antialiased`}>
      
      {/* 1. Header */}
      <Header />

      {/* 2. Main content grows to push footer down */}
      <main className="flex-grow max-w-5xl mx-auto px-6 mt-16 w-full">
        <h1 className={`text-[28px] font-bold mb-12 transition-colors ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left Column: Form */}
          <section className="space-y-5">
            <div>
              <label className={`block text-[13px] font-medium mb-2 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Name
              </label>
              <input 
                type="text" 
                placeholder="Your Name"
                className={`w-full border rounded-md px-3 py-2 text-[13px] focus:outline-none transition-colors ${
                  isDarkMode 
                  ? 'bg-black border-[#222] text-white focus:border-[#444] placeholder:text-[#444]' 
                  : 'bg-neutral-50 border-neutral-200 text-black focus:border-neutral-400 placeholder:text-neutral-400'
                }`}
              />
            </div>

            <div>
              <label className={`block text-[13px] font-medium mb-2 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Email
              </label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className={`w-full border rounded-md px-3 py-2 text-[13px] focus:outline-none transition-colors ${
                  isDarkMode 
                  ? 'bg-black border-[#222] text-white focus:border-[#444] placeholder:text-[#444]' 
                  : 'bg-neutral-50 border-neutral-200 text-black focus:border-neutral-400 placeholder:text-neutral-400'
                }`}
              />
            </div>

            <div>
              <label className={`block text-[13px] font-medium mb-2 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                Message
              </label>
              <textarea 
                rows={6}
                placeholder="How can I help?"
                className={`w-full border rounded-md px-3 py-2 text-[13px] focus:outline-none transition-colors resize-none ${
                  isDarkMode 
                  ? 'bg-black border-[#222] text-white focus:border-[#444] placeholder:text-[#444]' 
                  : 'bg-neutral-50 border-neutral-200 text-black focus:border-neutral-400 placeholder:text-neutral-400'
                }`}
              />
            </div>

            <button className={`w-full py-2 border text-[13px] font-medium rounded-md transition-all ${
              isDarkMode 
              ? 'border-[#222] text-white hover:bg-[#111]' 
              : 'border-neutral-200 text-black hover:bg-neutral-50'
            }`}>
              Send
            </button>
          </section>

          {/* Right Column: Links & Notes */}
          <section>
            <h2 className={`text-[16px] font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Links
            </h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {links.map((link) => (
                <button 
                  key={link}
                  className={`px-6 py-2 border rounded-md text-[13px] transition-all ${
                    isDarkMode 
                    ? 'border-[#222] text-white hover:bg-[#111]' 
                    : 'border-neutral-200 text-black hover:bg-neutral-50 shadow-sm'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>

            <h2 className={`text-[14px] font-semibold mb-2 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              Notes
            </h2>
            <p className="text-[13px] leading-relaxed">
              The form submits to an in-app endpoint and stays strictly black & white.
            </p>
          </section>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;