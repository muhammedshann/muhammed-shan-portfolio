import React from 'react';
import { useTheme } from '../useTheme'; // Import your custom hook

export default function Footer() {
  const { isDarkMode } = useTheme(); // Access global theme state

  return (
    <footer className={`mt-auto border-t w-full transition-colors duration-300 backdrop-blur-md ${
      isDarkMode 
      ? 'bg-black/60 border-[#1a1a1a]' 
      : 'bg-white/60 border-neutral-200'
    }`}>
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col items-center justify-center">
          <p className={`text-[13px] font-medium tracking-tight text-center transition-colors ${
            isDarkMode ? 'text-[#888888]' : 'text-neutral-500'
          }`}>
            © {new Date().getFullYear()} Muhammed shan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
