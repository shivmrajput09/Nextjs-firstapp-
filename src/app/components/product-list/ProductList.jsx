"use client"

import React from 'react'
import ProductCard from '../common/ProductCard'

function ProductList({ data }) {
    // Safety check: agar API fail ho jaye toh app crash na kare
    if (!Array.isArray(data)) {
        return <p className="text-center text-red-500">No products found!</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {
                data.map((obj) => (
                    <ProductCard key={obj.id} data={obj} />
                ))
            }
        </div>
    )
}

export default ProductList;
