import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Book <span className="text-green-600">Vibe</span>
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover, list, and track your favorite books all in one place. Stay
            inspired and keep reading!
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link to="/" className="hover:text-green-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/listed" className="hover:text-green-600">
                Listed Books
              </Link>
            </li>
            <li>
              <Link to="/pages" className="hover:text-green-600">
                Pages to Read
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-green-600">
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-green-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-600">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Book Vibe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
