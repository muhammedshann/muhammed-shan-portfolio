import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react'; // Added Menu/X for mobile
import { useTheme } from '../ThemeContext';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getNavLinkClass = (isActive) => {
        const base = "cursor-pointer transition-colors whitespace-nowrap";
        if (isActive) {
            return `${base} ${isDarkMode ? 'text-white' : 'text-black'}`;
        }
        return `${base} ${isDarkMode ? 'text-[#888888] hover:text-white' : 'text-neutral-500 hover:text-black'}`;
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto w-full bg-transparent">
            {/* Logo */}
            <div className={`font-semibold text-[15px] transition-colors ${isDarkMode ? 'text-white' : 'text-black'
                }`}>
                <span className="hidden sm:inline">Muhammed </span>
                <span>shan</span>
            </div>

            <div className="flex items-center gap-6">
                <ul className="flex gap-5 text-[13px] font-medium">
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
                    className={`p-1.5 border rounded-md transition-all ${isDarkMode
                            ? 'border-[#222] hover:bg-[#111] text-white'
                            : 'border-neutral-200 hover:bg-neutral-50 text-black'
                        }`}
                >
                    {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
                </button>
            </div>
        </nav>
    );
};

export default Header;