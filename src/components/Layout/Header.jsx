import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" flex justify-between items-center py-1 px-10">
        <div className="flex items-center">
          <p className="h-3 w-12 bg-[#A40E4C] rounded-lg mr-2"></p>
          <h1 className="text-4xl font-semibold">Form Builder</h1>
        </div>
        <div className="flex gap-10 font-semibold ">
          <NavLink
            className="hover:text-gray-700 duration-300 transition-colors delay-75"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-gray-700 duration-300 transition-colors delay-75"
            to="/form-builder"
          >
            Form Builder
          </NavLink>
          <NavLink
            className="hover:text-gray-700 duration-300 transition-colors delay-75"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className=" flex gap-10">
          <button className="font-semibold">Login</button>
          <button className="bg-black text-white px-4 py-1 rounded-xl hover:bg-gray-800 transition-colors duration-300 delay-100 font-semibold">
            Register
          </button>
        </div>
      </div>
      <p className="border-b border-gray-300 opacity-30"></p>
    </>
  );
};

export default Header;
