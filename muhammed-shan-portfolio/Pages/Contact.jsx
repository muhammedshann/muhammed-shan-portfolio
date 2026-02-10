import React from 'react';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import { useTheme } from '../src/ThemeContext';
import { Mail, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react'; // Optional: install lucide-react

const ContactPage = () => {
  const { isDarkMode } = useTheme();

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={16} />, url: 'www.linkedin.com/in/muhammedshan-' },
    { name: 'GitHub', icon: <Github size={16} />, url: 'https://github.com/muhammedshann' },
    { name: 'Resume', icon: <FileText size={16} />, url: '#' },
  ];

  const handleSendMail = () => {
    window.location.href = "mailto:muhammedshan930o@gmail.com?subject=Contact from Portfolio";
  };

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-500 ${
        isDarkMode ? 'bg-[#050505] text-[#a1a1a1]' : 'bg-[#fafafa] text-neutral-600'
      } font-sans antialiased`}
    >
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 mt-24 mb-20 w-full">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className={`text-4xl font-bold tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Get in touch<span className="text-blue-500">.</span>
          </h1>
          <p className="text-lg max-w-xl">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Action Card */}
          <div 
            onClick={handleSendMail}
            className={`lg:col-span-2 group cursor-pointer p-8 rounded-2xl border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-[#0a0a0a] border-[#1a1a1a] hover:border-blue-500/50' 
                : 'bg-white border-neutral-200 hover:border-blue-500/50 shadow-sm'
            }`}
          >
            <div className="flex justify-between items-start mb-12">
              <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-[#111]' : 'bg-neutral-100'}`}>
                <Mail className={isDarkMode ? 'text-white' : 'text-black'} size={24} />
              </div>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" size={24} />
            </div>
            
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Send me an email
            </h3>
            <p className="text-sm mb-6">Direct communication for inquiries or collaborations.</p>
            <span className="text-sm font-mono text-blue-500">muhammedshan930o@gmail.com</span>
          </div>

          {/* Social Links Column */}
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#0a0a0a] border-[#1a1a1a] hover:bg-[#111] text-white' 
                    : 'bg-white border-neutral-200 hover:bg-neutral-50 text-black shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 text-sm font-medium">
                  {link.icon}
                  {link.name}
                </div>
                <ArrowUpRight size={14} className="opacity-40" />
              </a>
            ))}
          </div>
        </div>

        {/* Subtle Footer Note */}
        <div className="mt-16 pt-8 border-t border-transparent flex justify-center">
            <p className="text-[12px] uppercase tracking-widest opacity-50">
              Based in Kerala, India • Available Worldwide
            </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;