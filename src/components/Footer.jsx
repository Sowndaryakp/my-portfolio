import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`py-4 ${darkMode ? "bg-black text-gray-200 shadow-lg shadow-white" : "bg-white text-gray-600 shadow-lg shadow-black"}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/sowndarya-k-p/" target="_blank" rel="noopener noreferrer" className={`text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode ? "text-white" : "text-gray-700"}`}>
              <FaLinkedin />
            </a>
            <a href="#" className={`text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode ? "text-white" : "text-gray-700"}`}>
              <FaDribbble />
            </a>
            <a href="https://github.com/Sowndaryakp" target="_blank" rel="noopener noreferrer" className={`text-1xl transition duration-300 transform hover:-translate-y-1 ${darkMode ? "text-white" : "text-gray-700"}`}>
              <FaGithub />
            </a>
          </div>
          <div className="text-center">
            <p>Made with ❤︎ by Sowndarya K P &copy; 2024.</p> 
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
