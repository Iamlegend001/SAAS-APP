import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion"; // Import framer-motion

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10 px-4 bg-transparent">
      {/* Our Plans Button with Motion */}
      <motion.button
        className="border border-gray-400 px-10 py-2 rounded-full mb-6 text-gray-700 font-medium hover:bg-gray-100 transition duration-300"
        whileHover={{ scale: 1.1 }} // Scale effect on hover
        transition={{ type: "spring", stiffness: 300 }}
      >
        Our Plans
      </motion.button>

      {/* Header with fade-in effect */}
      <motion.h1
        className="text-3xl font-semibold mb-10 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Choose the Plans
      </motion.h1>

      {/* Plan Grid with fade-in effect */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-between h-[500px] p-8 rounded-3xl transition duration-300 shadow-lg hover:shadow-2xl hover:scale-105 
              bg-white/30 backdrop-blur-lg border border-white/20 
              bg-gradient-to-br from-[#f8f9ff]/70 via-[#e1eaff]/50 to-[#d2e0ff]/30"
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={assets.lock_icon}
              alt="lock"
              className="w-14 h-14 mb-6 mx-auto"
            />

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900 mb-1">{item.id}</p>
              <p className="text-gray-700 mb-6 text-sm">{item.desc}</p>
            </div>

            <p className="text-3xl font-extrabold text-gray-900 mb-6 tracking-wide">
              <span className="text-lg align-top font-medium">$</span>
              {item.price}
              <span className="text-sm text-gray-600 font-normal"> / {item.credits} credits</span>
            </p>

            {/* Button with motion effect */}
            <motion.button
              className="mt-auto w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2.5 rounded-xl font-semibold 
                hover:from-indigo-600 hover:to-blue-600 hover:shadow-xl
                active:scale-95 active:shadow-md transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }} // Scale effect on hover
              transition={{ type: "spring", stiffness: 300 }}
            >
              {user ? (
                "Buy Now"
              ) : (
                <span onClick={() => alert("Please login to purchase!")}>
                  Login to Buy
                </span>
              )}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredit;
