import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import rubiksCubeImage from '../assets/images/rr.jpg';
import booksImage from '../assets/images/book.jpg';
import musicImage from '../assets/images/musicc.jpg';
import travelImage from '../assets/images/travel.jpg';

const Hobbies = () => {
  const { darkMode } = useTheme();

  const containerClasses = darkMode ? 'bg-black text-white' : 'bg-white text-gray-800';
  const cardClasses = darkMode ? 'bg-black-800 text-white shadow-md' : 'bg-white text-gray-800 shadow-md';
  const descriptionClasses = darkMode ? 'text-gray-200' : 'text-gray-700';

  return (
    <div id="hobbies" className={`py-12 ${containerClasses}`}>
      <div className="p-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Hobbies</h2>
        <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          {/* Here are some of the experiences I have worked on: */}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1: Rubik's Cube */}
          <div className={`border border-gray-300 rounded-lg shadow-lg relative w-full p-6 md:p-8 transition-shadow duration-300 ease-in-out hover:shadow-2xl ${cardClasses}`}>
            <h3 className="text-xl font-semibold mb-2 text-center">Rubik's Cube</h3>
            <div className="mb-4">
              <img src={rubiksCubeImage} alt="Rubik's Cube" className="w-full h-40 object-cover mb-2 rounded-lg" />
            </div>
            <p className={`${descriptionClasses} mb-2`}>
              The Rubik's Cube is a 3D combination puzzle that enhances problem-solving skills and has captivated enthusiasts for decades.
            </p>
          </div>

          {/* Card 2: Reading Books */}
          <div className={`border border-gray-300 rounded-lg shadow-lg relative w-full p-6 md:p-8 transition-shadow duration-300 ease-in-out hover:shadow-2xl ${cardClasses}`}>
            <h3 className="text-xl font-semibold mb-2 text-center">Reading Books</h3>
            <div className="mb-4">
              <img src={booksImage} alt="Reading Books" className="w-full h-40 object-cover mb-2 rounded-lg" />
            </div>
            <p className={`${descriptionClasses} mb-2`}>
              Reading books is a transformative hobby that opens up new worlds, perspectives, and can profoundly change one's life.
            </p>
          </div>

          {/* Card 3: Listening to Songs */}
          <div className={`border border-gray-300 rounded-lg shadow-lg relative w-full p-6 md:p-8 transition-shadow duration-300 ease-in-out hover:shadow-2xl ${cardClasses}`}>
            <h3 className="text-xl font-semibold mb-2 text-center">Music</h3>
            <div className="mb-4">
              <img src={musicImage} alt="Listening to Songs" className="w-full h-40 object-cover mb-2 rounded-lg" />
            </div>
            <p className={`${descriptionClasses} mb-2`}>
              Listening to songs is a relaxing hobby that brings joy and entertainment.
            </p>
          </div>

          {/* Card 4: Traveling */}
          <div className={`border border-gray-300 rounded-lg shadow-lg relative w-full p-6 md:p-8 transition-shadow duration-300 ease-in-out hover:shadow-2xl ${cardClasses}`}>
            <h3 className="text-xl font-semibold mb-2 text-center">Travelling</h3>
            <div className="mb-4">
              <img src={travelImage} alt="Traveling" className="w-full h-40 object-cover mb-2 rounded-lg" />
            </div>
            <p className={`${descriptionClasses} mb-2`}>
              Travelling is an enriching hobby that allows exploration of new cultures and places.
            </p>
          </div>
        </div>
      </div>
      <hr className={`mt-20 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />
    </div>
  );
};

export default Hobbies;
