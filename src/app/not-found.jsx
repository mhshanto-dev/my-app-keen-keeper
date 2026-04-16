import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      
      <div className="text-center relative">
        
        {/* 404 Text */}
        <h1 className="text-[120px] md:text-[180px] font-black text-gray-300 tracking-widest">
          404
        </h1>

        {/* Floating Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-indigo-600 px-4 py-1 rounded-md shadow-lg">
          <span className="text-white text-sm font-semibold">
            Page Not Found
          </span>
        </div>

        {/* Message */}
        <div className="mt-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">
            Oops! This page doesn’t exist.
          </h2>

          <p className="mt-2 text-gray-500 text-sm md:text-base">
            The page you’re looking for might have been removed or is temporarily unavailable.
          </p>
        </div>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all duration-300"
          >
            ⬅ Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;