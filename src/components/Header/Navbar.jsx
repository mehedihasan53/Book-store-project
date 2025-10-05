import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-sm px-4">
      <div className="container mx-auto navbar bg-base-100">
        {/* Left: Logo */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold">
            Book <span className="text-green-600">Vibe</span>
          </Link>
        </div>

        {/* Center: Nav links (hidden on mobile) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border border-green-600 px-3 py-1 rounded"
                    : "text-gray-700 hover:text-green-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/readListed"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border border-green-600 px-3 py-1 rounded"
                    : "text-gray-700 hover:text-green-600"
                }
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 border border-green-600 px-3 py-1 rounded"
                    : "text-gray-700 hover:text-green-600"
                }
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right: Buttons */}
        <div className="navbar-end gap-2 hidden lg:flex">
          <Link
            to="/signin"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-500 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile: Hamburger dropdown */}
        <div className="lg:hidden navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/readListed">Listed Books</NavLink>
              </li>
              <li>
                <NavLink to="/pages">Pages to Read</NavLink>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
