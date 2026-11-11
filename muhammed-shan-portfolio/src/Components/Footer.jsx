import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-[1.5px] border-[#131311] dark:border-white/20 w-full bg-[#FAFAFA] dark:bg-[#0C0D0B] text-[#131311] dark:text-[#FAFAFA] transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#131311]/15 dark:border-white/15">
          {/* Logo & Tagline */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1.5 font-extrabold text-[17px] tracking-tight justify-center sm:justify-start">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#C6FD50] border border-[#131311] inline-block" />
              <span>Muhammed</span>
              <span>shan.</span>
            </div>
            <p className="text-[12px] mt-1 text-[#6C6C6A] dark:text-[#B9B9B7]">
              Full Stack &amp; Mobile Engineer · AI-Powered Web &amp; App Development.
            </p>
          </div>

          {/* Socials & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/muhammedshann"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-[8px] border-[1.5px] border-[#131311] bg-white dark:bg-[#1C1D1A] shadow-[2px_2px_0px_0px_#131311] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              <Github size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammedshan-"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-[8px] border-[1.5px] border-[#131311] bg-white dark:bg-[#1C1D1A] shadow-[2px_2px_0px_0px_#131311] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="mailto:muhammedshan930o@gmail.com"
              aria-label="Email Muhammed Shan"
              className="p-2 rounded-[8px] border-[1.5px] border-[#131311] bg-white dark:bg-[#1C1D1A] shadow-[2px_2px_0px_0px_#131311] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-[8px] border-[1.5px] border-[#131311] bg-[#C6FD50] text-[#131311] shadow-[2px_2px_0px_0px_#131311] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all ml-2"
            >
              <ArrowUp size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#6C6C6A] dark:text-[#B9B9B7] gap-3">
          <p>© {new Date().getFullYear()} Muhammed Shan. All rights reserved.</p>
          <p className="font-mono text-[11px]">ONE Developer · Web, Mobile &amp; AI · Shipped Fast</p>
        </div>
      </div>
    </footer>
  );
}
