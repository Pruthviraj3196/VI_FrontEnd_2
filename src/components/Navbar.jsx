import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800">
      <div className="ml-10">
        <img src={logo} alt="Company Logo" className="h-12" />
      </div>
      <ul  className="flex space-x-20 items-center mr-60">
        <li>
          <Link to="/"  className="text-white font-bold hover:text-yellow-400">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/services"  className="text-white font-bold hover:text-yellow-400">
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="/traning"  className="text-white font-bold hover:text-yellow-400">
            TRAINING
          </Link>
        </li>
        <li>
          <Link to="/jobs"  className="text-white font-bold hover:text-yellow-400">
            JOBS
          </Link>
        </li>
        <li>
          <Link to="/support"  className="text-white font-bold hover:text-yellow-400">
           SUPPORT
          </Link>
        </li>
        <li>
          {/* Search Icon */}
          < CiSearch className="h-6 w-6 text-white hover:text-yellow-400 cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
