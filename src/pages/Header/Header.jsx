import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <a>
          <NavLink to="/">Home</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/shop">Shop</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/about">About us</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/contact">Contact</NavLink>
        </a>
      </li>
      <li>
        <a>
          <NavLink to="/blog">Blog</NavLink>
        </a>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-navbar fixed top-0 w-full z-50">
      <div className="navbar container mx-auto">
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
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <button className="btn btn-ghost text-2xl">Furniture</button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-[17px]">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <NavLink to="/login">
              <button className="font-semibold bg-gray-200 py-2 rounded-md px-4">
                Login
              </button>
            </NavLink>
          </div>
          <div className="dropdown dropdown-end hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Tofazzal Hossain</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
