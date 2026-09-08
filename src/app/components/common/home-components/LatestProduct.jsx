import React from 'react'
import ProductCard from '../ProductCard'


function LatestProduct() {
  return (
    <section className='bg-lime-50 py-10'>
        <h2 className='text-3xl font-bold text-center'>LatestProduct</h2>
        <div className='max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>


<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />


</div>  

        
         </section>


) 
}

export default LatestProduct