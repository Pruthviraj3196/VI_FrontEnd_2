import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Importing social icons
import footer from "../../assets/footer.png"
const Footer = () => {
  return (
    <footer className=" text-white py-10">
      {/* First Row - Logo */}
      <div className="flex justify-center mb-8">
        <img
          src={footer}
          alt="GenexCorp Logo"
          className="w-[950px]"
        />
      </div>

      {/* Second Row - Footer Information */}
      <div className="grid text-black grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
        {/* First Column - About GenexCorp */}
        <div>
          <h3 className="text-lg mb-4 font-extrabold">ABOUT GENEXCORP</h3>
          <p className="text-sm mb-5">
            Some believe in the power of numbers. Some believe in the power of
            technology. We believe in the power of people, power of human touch
            which brings best out of the best and the impact people can have on
            technology.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-700" />
          </div>
        </div>

        {/* Second Column - Quick Links */}
        <div>
          <h3 className="text-lg font-extrabold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">HOME</li>
            <li className="hover:underline cursor-pointer">Our Objective</li>
            <li className="hover:underline cursor-pointer">Portfolio</li>
            <li className="hover:underline cursor-pointer">Corporate Training</li>
            <li className="hover:underline cursor-pointer">Career Augmentation Training</li>
            <li className="hover:underline cursor-pointer">Jobs</li>
            <li className="hover:underline cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Third Column - Contact Information */}
        <div>
          <h3 className="text-lg font-extrabold mb-4">CONTACT INFORMATION</h3>
          <p className="text-sm mb-2">
            Address - VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Road # 1,
            Hyderabad - 500085, Telangana, India
          </p>
          <p className="text-sm mb-2">Phone: +91 9876543210</p>
          <p className="text-sm">Email: info@genexcorp.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
