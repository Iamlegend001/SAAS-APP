import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 px-6 md:px-20 lg:px-32 text-center lg:text-left">
      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">
        Create <span className="text-blue-600">AI Images</span>
      </h1>

      <p className="text-gray-600 mb-4 text-base sm:text-lg">
        Turn your imagination into stunning visuals in seconds.
      </p>

      {/* Image + Text Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
        <img
          src={assets.sample_img_1}
          alt="sample"
          className="w-80 xl:w-96 rounded-xl shadow-lg"
        />
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold mb-4">
            Introducing the AI-powered Text-to-Image Generator
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds. From product visuals to character
            designs and portraits, even concepts that don’t yet exist can be
            visualized effortlessly. Powered by advanced AI technology, the
            creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
