import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [authType, setAuthType] = useState('login');
  const { setShowLogin } = useContext(AppContext);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.form
        className="relative w-[90%] max-w-md bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/30 space-y-6"
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* ❌ Close Button */}
        <button
          type="button"
          onClick={() => setShowLogin(false)}
          className="absolute top-3 right-3 text-white text-xl hover:scale-110 transition"
        >
          ❌
        </button>

        <h1 className="text-3xl font-bold text-center text-white">
          {authType === 'login' ? 'Sign In' : 'Sign Up'}
        </h1>
        <p className="text-center text-gray-200 text-sm">
          {authType === 'login' ? 'Welcome back!' : 'Create your account'}
        </p>

        {/* Username */}
        <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
          <img
            src={assets.user_icon}
            alt="user"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 opacity-70"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/60 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
        </motion.div>

        {/* Email - only for signup */}
        {authType === 'signup' && (
          <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
            <img
              src={assets.email_icon}
              alt="email"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 opacity-70"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/60 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
          </motion.div>
        )}

        {/* Password */}
        <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
          <img
            src={assets.lock_icon}
            alt="lock"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 opacity-70"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/60 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {authType === 'login' ? '🚀 Sign In' : '🚀 Sign Up'}
        </motion.button>

        {/* Toggle Login/Signup */}
        <p className="text-center text-sm text-gray-200">
          {authType === 'login' ? 'Don’t have an account?' : 'Already have an account?'}
          <button
            type="button"
            className="text-blue-300 underline ml-1"
            onClick={() => setAuthType(authType === 'login' ? 'signup' : 'login')}
          >
            {authType === 'login' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Login;
