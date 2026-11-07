import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../useTheme';

const navItems = [
  { name: 'How it works', href: '#process' },
  { name: 'Why Me', href: '#why-me' },
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'FAQs', href: '#faqs' },
];

export default function Header({ activeSection = 'home', onNavigate }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? 'bg-[#0C0D0B]/85 backdrop-blur-md border-b border-[#2A2A27] py-3.5 shadow-sm'
            : 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#EAEAEA] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* ProjectOne Style Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1.5 font-extrabold text-[17px] tracking-tight text-[#131311] dark:text-[#FAFAFA]"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-[#C6FD50] border border-[#131311] inline-block" />
          <span>Muhammed</span>
          <span className="text-[#131311] dark:text-[#FAFAFA]">shan.</span>
        </a>

        {/* ProjectOne Signature Dark Menu Capsule (Desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-[#131311] text-[#FAFAFA] rounded-[10px] p-1.5 shadow-md border border-[#20201D]">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.06em] rounded-[8px] transition-all duration-200 ${
                  isActive
                    ? 'bg-[#2A2A27] text-[#C6FD50]'
                    : 'text-[#B9B9B7] hover:text-[#FAFAFA] hover:bg-white/[0.06]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right Actions: Lime CTA + Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Signature Lime Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider px-4 py-2 rounded-[9px] border-[1.5px] border-[#131311] bg-[#C6FD50] text-[#131311] shadow-[3px_2.5px_0px_0px_#131311] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1px_0px_0px_#131311] transition-all"
          >
            <span>Get Started</span>
            <span className="flex items-center justify-center w-4 h-4 rounded bg-[#131311] text-[#C6FD50]">
              <ArrowUpRight size={11} strokeWidth={3} />
            </span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 border-[1.5px] border-[#131311] dark:border-white/20 rounded-[9px] bg-white dark:bg-[#1C1D1A] text-[#131311] dark:text-white shadow-[2.5px_2px_0px_0px_#131311] dark:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-[9px] border-[1.5px] border-[#131311] bg-white dark:bg-[#1C1D1A] text-[#131311] dark:text-white shadow-[2.5px_2px_0px_0px_#131311]"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-[1.5px] border-[#131311] dark:border-white/20 bg-[#FAFAFA] dark:bg-[#131311] px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#131311] text-[#C6FD50]'
                      : 'text-[#131311] dark:text-[#B9B9B7] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C6FD50]" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-[9px] border-[1.5px] border-[#131311] bg-[#C6FD50] text-[#131311] text-[13px] font-bold uppercase tracking-wider shadow-[3px_2.5px_0px_0px_#131311]"
            >
              <span>Get Started</span>
              <ArrowUpRight size={14} strokeWidth={3} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
