import React from 'react';
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800">
      <div className="ml-10">
        <img src={logo} alt="Company Logo" className="h-12" />
      </div>
      <ul className="flex space-x-20 items-center mr-60">
        <li><a href="#home" className="text-white font-bold hover:text-yellow-400">Home</a></li>
        <li><a href="#services" className="text-white font-bold hover:text-yellow-400">Services</a></li>
        <li><a href="#training" className="text-white font-bold hover:text-yellow-400">Training</a></li>
        <li><a href="#jobs" className="text-white font-bold hover:text-yellow-400">Jobs</a></li>
        <li><a href="#support" className="text-white font-bold hover:text-yellow-400">Support</a></li>
        <li>
          {/* Search Icon */}
          < CiSearch className="h-6 w-6 text-white hover:text-yellow-400 cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
