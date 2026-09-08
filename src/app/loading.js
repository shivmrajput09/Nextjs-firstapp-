import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4">
      
      {/* Animated Spinner */}
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-gray-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>

      {/* Loading Text */}
      <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
        Loading...
      </h2>
      
      {/* Subtext */}
      <p className="text-gray-500 text-sm max-w-xs text-center">
        Please wait a moment while we prepare your content.
      </p>
      
    </div>
  );
}

export default Loading;