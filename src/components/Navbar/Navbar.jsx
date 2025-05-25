import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar my-4 work-sans">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/listedBooks"}>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to={""}>pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <button className="text-green-600 text-xl md:text-3xl font-bold work-sans px-5 py-2 rounded-xl  hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            Book vibe
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/listedBooks"}>Listed Books</NavLink>
          </li>
          <li>
            <NavLink to={""}>pages to Read</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 ">
          <div className="flex flex-wrap items-center justify-center gap-4 ">
            <div className="flex items-center gap-2">
              <button className="bg-green-600 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Sign In
              </button>
              <button className="bg-blue-600 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
