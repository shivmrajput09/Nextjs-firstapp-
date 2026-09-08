import React from 'react';
// Yahan path apne folder structure ke hisaab se check kar lena. 
// Video mein sir ne '../components/common/ProductCard' use kiya hai.
import ProductCard from '../components/common/ProductCard'; 

function Products() {
  return (
    <div className="py-10">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center m-10 text-gray-800">
        Our Products
      </h1>
      
      {/* Main Container */}
      <div className="max-w-[1320px] mx-auto px-4">
        
        {/* Grid System - Mobile mein 1, tab mein 2, aur laptop mein 4 cards dikhenge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Yahan hum multiple ProductCards render kar rahe hain abhi ke liye */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
        
      </div>
    </div>
  );
}

export default Products;