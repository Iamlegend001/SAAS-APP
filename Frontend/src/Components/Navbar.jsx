import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-10 bg-white shadow-md rounded-lg">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-32" />
      </Link>

      {/* Right Side */}
      {user ? (
        <div className="flex items-center gap-6">
          {/* Credits */}
          <div className="flex items-center gap-2 bg-yellow-100 px-4 py-1 rounded-full hover:bg-yellow-200 transition-all duration-200 cursor-pointer">
            <img className="w-4" src={assets.credit_star} alt="credits" />
            <p className="text-sm font-medium">Credits left: 50</p>
          </div>

          {/* Greeting */}
          <p className="font-medium text-sm hover:text-teal-600 transition-all duration-200 cursor-default">
            Hi, GreatStack
          </p>

          {/* Profile Dropdown */}
          <div className="relative group cursor-pointer">
            <img
              src={assets.profile_icon}
              className="w-10 h-10 rounded-full drop-shadow"
              alt="profile"
            />
            <div className="absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out bg-white shadow-lg right-0 top-12 z-10 w-48 rounded-lg py-2 text-sm">
              <ul className="text-center">
                <li className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer">Buy Credits</li>
                <li className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-10">
          <p
            onClick={() => navigate("/buy")}
            className="cursor-pointer hover:text-teal-600 transition"
          >
            Pricing
          </p>
          <button className="bg-zinc-800 text-white px-6 py-2 text-sm rounded-full hover:bg-zinc-700 transition">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
