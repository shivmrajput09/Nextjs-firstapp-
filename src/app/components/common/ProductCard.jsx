import React from 'react';
// Agar aap Next.js ka Image component use kar rahe hain toh isko uncomment kar lijiye
// import Image from 'next/image'; 

export default function ProductCard() {
  return (
    <div className='border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden'>
      {/* Product Image Section */}
      <div className='w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden'>
        {/* Next.js Image component ya normal img tag use kar sakte hain */}
        <img 
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" 
          alt="Product Name" 
          className='w-full h-full object-cover'
        />
      </div>

      {/* Product Details Section */}
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 line-clamp-1'>
          Premium Smart Watch
        </h3>
        <p className='text-sm text-gray-500 mt-1'>
          Electronics
        </p>
        
        <div className='flex items-center justify-between mt-4'>
          <span className='text-xl font-bold text-gray-900'>
            $99.00
          </span>
          <button className='bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}