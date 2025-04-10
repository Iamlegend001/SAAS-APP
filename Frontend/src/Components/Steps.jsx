import React from "react";
import { stepsData } from "../assets/assets";

const Steps = () => {
  return (
    <div className="px-4 text-center sm:text-left max-w-3xl mx-auto my-20">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">How it works</h1>
      <p className="text-lg text-gray-600 mb-8">
        Transform Words into Stunning Images
      </p>

      <div className="flex flex-col gap-6">
        {stepsData.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={item.icon} alt="" className="w-12 h-12 sm:w-14 sm:h-14" />
            <div>
              <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
