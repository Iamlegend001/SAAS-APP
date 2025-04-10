import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center text-center my-20 px-4">
      {/* Badge */}
      <div className="text-stone-600 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-400 shadow-sm">
        <p className="text-sm font-medium">Best text to image generator</p>
        <img src={assets.star_icon} alt="star icon" className="w-4 h-4" />
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mt-10 max-w-[320px] sm:max-w-[600px] leading-tight">
        Turn text to <span className="text-blue-600">image,</span> in seconds
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg text-gray-600 max-w-xl mt-6">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen.
      </p>

      {/* CTA Button */}
      <button className="mt-10 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all shadow-lg">
        Generate Image
        <img src={assets.star_group} alt="stars" className="w-5 h-5" />
      </button>

      {/* Sample Images with Flexbox */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generated Images form imagify</p>
    </div>
  );
};

export default Header;
