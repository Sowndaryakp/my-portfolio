import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSun as SunIcon, FaMoon as MoonIcon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

function Footer() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <footer className={darkMode ? "bg-black py-4 text-gray-200" : "bg-white py-4 text-gray-600"}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/sowndarya-k-p/" target="_blank" rel="noopener noreferrer" className={`text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode && "text-white"}`}>
              <FaLinkedin />
            </a>
            <a href="#" className={`text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode && "text-white"}`}>
              <FaDribbble />
            </a>
            <a href="https://github.com/Sowndaryakp" target="_blank" rel="noopener noreferrer" className={`text-gray-700 text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode && "text-white"}`}>
              <FaGithub />
            </a>
          </div>
          <div className="text-center">
            <p>Made with ♥ by Sowndarya K P &copy; 2024.</p> 
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
