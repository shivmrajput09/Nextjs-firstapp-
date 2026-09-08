import { getProducts } from "@/api-services/productionApi";
import React from "react";
import ProductList from "../components/product-list/ProductList";

export default async function ProductServer() {
    let data = await getProducts(); // Yahan direct Array aa raha hai

    return (
        <div>
            <h1 className="text-3xl py-10 text-center">Our Products</h1>
            
            {/* Direct 'data' pass karein */}
            <ProductList data={data} />
        </div>
    )
}



// y data server side se render hoke aaaya h
