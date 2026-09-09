import React from 'react';
import Link from 'next/link';

// 1. Yahan '{ data }' prop receive karna zaroori hai
export default function ProductCard({ data }) {
  
  // Safety check
  if (!data) return null;

  return (
    <div className='border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden'>
      {/* Product Image Section */}
      <Link
        href={`/products/${data.id}`}
        className='block w-full h-64 bg-gray-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset'
        aria-label={`View details for ${data.title}`}
      >
        <img 
          // 2. Hardcoded image ki jagah API ka thumbnail
          src={data.thumbnail} 
          alt={data.title} 
          className='w-full h-full object-cover'
        />
      </Link>

      {/* Product Details Section */}
      <div className='p-4'>
        <Link href={`/products/${data.id}`} className='block focus:outline-none focus:underline'>
          <h3 className='text-lg font-semibold text-gray-800 line-clamp-1'>
          {/* 3. "Premium Smart Watch" ki jagah data.title */}
          {data.title}
          </h3>
        </Link>
        <p className='text-sm text-gray-500 mt-1'>
          {/* 4. Category ko dynamic banaya */}
          {data.category}
        </p>
        
        <div className='flex items-center justify-between mt-4'>
          <span className='text-xl font-bold text-gray-900'>
            {/* 5. $99.00 ki jagah API ka price */}
            ${data.price}
          </span>
          <Link
            href={`/products/${data.id}`}
            className='bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
