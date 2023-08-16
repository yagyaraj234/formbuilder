import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center py-2 px-10">
        <div className="flex items-center">
          <p className="h-8 w-10 bg-primary rounded-r-xl mr-2 "></p>
          <Link to="/" className="text-4xl font-semibold">
            Form Builder
          </Link>
        </div>
        <div className="flex gap-10 font-semibold ">
          <NavLink
            className="hover:text-[#A40E4C] duration-300 transition-colors delay-75"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-[#A40E4C] duration-300 transition-colors delay-75 "
            to="/form-builder"
          >
            Form Builder
          </NavLink>
          <NavLink
            className="hover:text-[#A40E4C] duration-300 transition-colors delay-75"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className=" flex gap-10  ">
          <NavLink
            to="/login"
            className="font-semibold px-4 py-1 hover:text-primary "
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-primary text-white px-4 py-1 rounded-xl hover:bg-white hover:text-primary hover:border-primary border-2 border-white hover:border-2 transition-colors duration-300 delay-100 font-semibold "
          >
            Register
          </NavLink>
        </div>
      </div>
      <p className="border-b border-gray-300 opacity-30"></p>
    </>
  );
};

export default Header;
