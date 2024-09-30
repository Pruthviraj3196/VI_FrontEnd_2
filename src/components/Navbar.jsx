import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="ml-4">
          <img src={logo} alt="Company Logo" className="h-12" />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden mr-4">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
          </button>
        </div>

        {/* Links - Visible only on larger screens */}
        <ul className="hidden md:flex md:space-x-8 md:mr-10 md:items-center">
          <li>
            <Link to="/" className="text-white font-bold hover:text-yellow-400">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white font-bold hover:text-yellow-400">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/traning" className="text-white font-bold hover:text-yellow-400">
              TRAINING
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="text-white font-bold hover:text-yellow-400">
              JOBS
            </Link>
          </li>
          <li>
            <Link to="/support" className="text-white font-bold hover:text-yellow-400">
              SUPPORT
            </Link>
          </li>
          <li>
            {/* Search Icon */}
            <CiSearch className="h-6 w-6 text-white hover:text-yellow-400 cursor-pointer" />
          </li>
        </ul>
      </div>

      {/* Mobile Links - Visible only when hamburger menu is clicked */}
      {isOpen && (
        <ul className="md:hidden space-y-4 mt-4">
          <li>
            <Link to="/" className="text-white font-bold hover:text-yellow-400 block">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white font-bold hover:text-yellow-400 block">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/traning" className="text-white font-bold hover:text-yellow-400 block">
              TRAINING
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="text-white font-bold hover:text-yellow-400 block">
              JOBS
            </Link>
          </li>
          <li>
            <Link to="/support" className="text-white font-bold hover:text-yellow-400 block">
              SUPPORT
            </Link>
          </li>
          <li>
            {/* Search Icon */}
            <CiSearch className="h-6 w-6 text-white hover:text-yellow-400 cursor-pointer" />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
