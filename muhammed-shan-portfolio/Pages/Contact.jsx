import React, { useState } from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';
import { Mail, Linkedin, Github, FileText, ArrowUpRight, X, Eye } from 'lucide-react';

const ContactPage = () => {
  const { isDarkMode } = useTheme();
  const [showResume, setShowResume] = useState(false);

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'https://www.linkedin.com/in/muhammedshan-' },
    { name: 'GitHub', icon: <Github size={16} />, url: 'https://github.com/muhammedshann' },
  ];

  const handleSendMail = () => {
    window.location.href = "mailto:muhammedshan930o@gmail.com";
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#050505] text-[#a1a1a1]' : 'bg-[#fafafa] text-neutral-600'
      } font-sans antialiased`}
    >
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 mt-24 mb-20 w-full">
        <header className="mb-16">
          <h1 className={`text-4xl font-bold tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Get in touch<span className="text-blue-500">.</span>
          </h1>
          <p className="text-[15px] max-w-xl opacity-80">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Action Card */}
          <div
            onClick={handleSendMail}
            className={`lg:col-span-2 group cursor-pointer p-8 rounded-2xl border transition-all duration-300 ${isDarkMode ? 'bg-[#0a0a0a] hover:border-purple-500/50 border-[#1a1a1a] border-blue-500/50' : 'bg-white border-neutral-200 hover:border-red-500/50 shadow-sm'
              }`}
          >
            <div className="flex justify-between items-start mb-12">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-[#111]' : 'bg-neutral-100'}`}>
                <Mail className={isDarkMode ? 'text-white' : 'text-black'} size={24} />
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-500" size={24} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Send me an email</h3>
            <span className="text-[13px] font-mono text-blue-500">muhammedshan930o@gmail.com</span>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            {/* Social Links */}
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${isDarkMode ? 'bg-[#0a0a0a] hover:border-blue-500/50 border-[#1a1a1a] hover:bg-[#111] text-white' : 'bg-white border-neutral-200 hover:border-blue-500/50 hover:bg-neutral-50 text-black shadow-sm'
                  }`}
              >
                <div className="flex items-center gap-3 text-[13px] font-medium">{link.icon} {link.name}</div>
                <ArrowUpRight size={14} className="opacity-40" />
              </a>
            ))}

            {/* Resume Trigger */}
            <button
              onClick={() => setShowResume(!showResume)}
              className={`flex items-center justify-between w-full p-4 rounded-xl border transition-all duration-300 ${isDarkMode ? 'bg-[#0a0a0a] hover:border-blue-500/50 border-[#1a1a1a] hover:bg-[#111] text-white' : 'bg-white border-neutral-200 hover:border-blue-500/50 hover:bg-neutral-50 text-black shadow-sm'
                }`}
            >
              <div className="flex items-center gap-3 text-[13px] font-medium"><FileText size={16} /> Resume</div>
              <Eye size={14} className="opacity-40" />
            </button>
          </div>
        </div>

        {/* Inline Resume Viewer (Iframe) */}
        {showResume && (
          <div className="mt-12 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Preview: Muhammed_Shan_Resume.pdf</h3>
              <button onClick={() => setShowResume(false)} className="p-1 hover:text-red-500"><X size={18} /></button>
            </div>
            <div className={`w-full h-[500px] md:h-[800px] rounded-2xl border overflow-hidden ${isDarkMode ? 'border-[#1a1a1a]' : 'border-neutral-200 shadow-lg'}`}>
              <iframe
                src="/Resume.pdf#view=FitH"
                width="100%"
                height="100%"
                className={`${isDarkMode ? 'invert-[0.05] grayscale-[0.1]' : ''} border-none`}
                title="Resume Viewer"
              />
            </div>

            <div className="mt-4 flex justify-center md:hidden">
              <a
                href="/Resume.pdf"
                download
                className="text-[12px] font-medium text-blue-500 underline"
              >
                Can't see the preview? Download PDF
              </a>
            </div>
          </div>
        )}

        <div className=" pt-10 border-t border-transparent flex justify-center">
          <p className="text-[12px] uppercase tracking-widest opacity-50">Based in Kerala, India • Available Worldwide</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;