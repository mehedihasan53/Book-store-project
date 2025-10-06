import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-white via-gray-50 to-gray-200 text-center px-6">
      <div className="flex flex-col items-center max-w-lg">
        <div className="p-4 bg-red-100 rounded-full mb-6 animate-bounce">
          <AlertTriangle className="w-16 h-16 text-red-500" />
        </div>

        <h1 className="text-[8rem] font-extrabold text-gray-800 leading-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          The page you’re looking for doesn’t exist, was moved, or might have
          been removed. Double-check the URL or head back to the homepage.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 bg-red-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>

      <footer className="absolute bottom-6 text-gray-400 text-sm">
        © {new Date().getFullYear()} — All rights reserved.
      </footer>
    </div>
  );
};

export default ErrorPage;
