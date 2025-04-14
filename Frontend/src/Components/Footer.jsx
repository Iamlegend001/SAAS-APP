import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 py-10 px-6 md:px-20 mt-16 text-center md:text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src={assets.logo} alt="Logo" className="w-32" />
        </motion.div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#"
            aria-label="Facebook"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="w-6 hover:scale-110 transition"
            />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Twitter"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <img
              src={assets.twitter_icon}
              alt="Twitter"
              className="w-6 hover:scale-110 transition"
            />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Instagram"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img
              src={assets.instagram_icon}
              alt="Instagram"
              className="w-6 hover:scale-110 transition"
            />
          </motion.a>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Kuttu.dev — All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
