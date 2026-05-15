import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    const getNavLinkClass = (isActive) => {
        const base = "cursor-pointer transition-colors whitespace-nowrap py-1";
        if (isActive) {
            return `${base} ${isDarkMode ? 'text-white' : 'text-black'}`;
        }
        return `${base} ${isDarkMode ? 'text-[#888888] hover:text-white' : 'text-neutral-500 hover:text-black'}`;
    };

    return (
        <nav className="flex items-center justify-between px-6 py-6 max-w-5xl mx-auto w-full bg-transparent gap-4">
            {/* Logo */}
            <div className={`font-semibold text-[15px] transition-colors flex-shrink-0 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                <span className="hidden xs:inline">Muhammed </span>
                <span>shan</span>
            </div>

            {/* Navigation Links - Scrollable on very small screens */}
            <div className="flex items-center gap-4 sm:gap-10 overflow-hidden">
                <ul className="flex items-center gap-5 sm:gap-10 text-[13px] font-medium overflow-x-auto no-scrollbar py-1">
                    <li>
                        <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => getNavLinkClass(isActive)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => getNavLinkClass(isActive)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className={`p-2 border rounded-xl transition-all flex-shrink-0 ${isDarkMode
                        ? 'border-[#1a1a1a] bg-[#0a0a0a] hover:bg-[#111] text-white'
                        : 'border-neutral-200 bg-white hover:bg-neutral-50 text-black shadow-sm'
                        }`}
                >
                    {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
                </button>
            </div>
        </nav>
    );
};

export default Header;