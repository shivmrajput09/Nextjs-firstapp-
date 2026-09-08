import React from 'react';
import Link from 'next/link'; // Assuming you are using Next.js

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4 text-center">
      
      {/* 404 Error Badge */}
      <div className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-6">
        404 Error
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        Page not found
      </h1>

      {/* Description Text */}
      <p className="text-gray-500 mb-8 max-w-md mx-auto text-base">
        The page you are looking for does not exist or may have been moved. 
        Let's get you back to something useful.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link 
          href="/" 
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm"
        >
          Back to Home
        </Link>
        <Link 
          href="/programs" 
          className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
        >
          Explore Programs
        </Link>
      </div>
      
    </div>
  );
}

export default NotFound;