import React from 'react';
import { assets } from '../assets/assets';

const GenerateBtn = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-16 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        See the Magic. <span className="text-blue-600">Try Now</span>
      </h1>

      <button className="mt-6 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-300">
        Generate Images
        <img src={assets.star_group} alt="stars" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default GenerateBtn;
