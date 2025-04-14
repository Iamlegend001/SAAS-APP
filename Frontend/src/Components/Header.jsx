import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
 const { user, setShowLogin} = useContext(AppContext)
 const navigate = useNavigate()
  const onClickHandler = () => {
   if(user){
    navigate('/result')
   }else{
    setShowLogin(true)
   }
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center my-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Badge */}
      <motion.div
        className="text-stone-600 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-400 shadow-sm"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <p className="text-sm font-medium">Best text to image generator</p>
        <img src={assets.star_icon} alt="star icon" className="w-4 h-4" />
      </motion.div>

      {/* Main heading */}
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold mt-10 max-w-[320px] sm:max-w-[600px] leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Turn text to <span className="text-blue-600">image,</span> in seconds
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-base sm:text-lg text-gray-600 max-w-xl mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen.
      </motion.p>

      {/* CTA Button */}
      <motion.button
      onClick={onClickHandler}
        className="mt-10 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold transition-all shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Generate Image
        <img src={assets.star_group} alt="stars" className="w-5 h-5" />
      </motion.button>

      {/* Sample Images with Flexbox */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 1,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              key={index}
              width={70}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.4 }}
            />
          ))}
      </motion.div>

      <motion.p
        className="mt-2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        Generated Images from Imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;
