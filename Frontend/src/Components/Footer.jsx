import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-20 mt-16 text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="w-32" />
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 hover:scale-110 transition" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={assets.twitter_icon} alt="Twitter" className="w-6 hover:scale-110 transition" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={assets.instagram_icon} alt="Instagram" className="w-6 hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Kuttu.dev — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
