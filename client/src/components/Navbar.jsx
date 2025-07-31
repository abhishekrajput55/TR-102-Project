import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor shadow-xl z-50">
      <div className="flex items-center justify-between lg:max-w-[90%] w-full mx-auto px-4 md:px-10 lg:px-28 py-1 font-bold">
        {/* Logo */}
        {/* <h1 className="text-xl text-themeColor"> */}
        <Link to="/">
          <img
            src="/assets/indexImg/weblogo-2.png"
            alt="website logo"
            className="h-24"
          />
        </Link>
        {/* </h1> */}

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li className="group relative py-2">
            <Link to="/About" className="text-black">
              About Us
              <span className="absolute left-0 bottom-0 w-4 h-[3px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li className="group relative py-2">
            <Link to="/auth" className="text-black">
              Sign in
              <span className="absolute left-0 bottom-0 w-4 h-[3px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li className="group relative py-2">
            <Link to="/auth" className="text-black">
              Sign up
              <span className="absolute left-0 bottom-0 w-4 h-[3px] bg-themeColor transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <i className="ri-menu-line text-2xl text-themeColor cursor-pointer"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
