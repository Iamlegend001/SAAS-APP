import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center text-center my-16 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        See the Magic. <span className="text-blue-600">Try Now</span>
      </h1>

      {/* Generate Button with Motion Animation */}
      <motion.button
      onClick={onClickHandler}
        className="mt-6 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Generate Images
        <img src={assets.star_group} alt="stars" className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default GenerateBtn;
