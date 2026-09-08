"use client"

import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

function BannerSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    let openExploremodel = () => {
        setIsModalOpen(true);
    }

    let closeModel = () => {
        setIsModalOpen(false);
    }

  return (
    // Note: Is section tag mein 'relative' class lagi hai jisse form iske upar float karega
    <section className="bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center h-screen w-full pt-32 relative">
        
        {/* Banner Text Content */}
        <div className="flex flex-col items-center justify-center">
            
            <h1 className="text-4xl text-white font-bold text-center drop-shadow-md">
              Live Above The Ordinary <br /> STJ Group, Mohali
            </h1>

            <p className="text-white font-bold text-center mt-8 drop-shadow-md">
              Standing tall at 36 floors, offering <br />
              panoramic views, futuristic <br />
              engineering, and an elite lifestyle in <br />
              Mohali's booming urban <br />
              landscape.
            </p>

            <button onClick={openExploremodel} className="mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition shadow-md">
              Explore Now
            </button>
            
        </div>

        {/* Modal / Form Section - Ab ye bilkul current image ke upar aayega */}
        {isModalOpen && (
          <div className="w-[350px] absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-50">
            
            <form className="bg-white p-6 rounded shadow-lg relative">
              
              {/* React Close Icon */}
              <button 
                type="button" 
                onClick={closeModel} 
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition"
              >
                <IoMdClose size={24} />
              </button>

              <h2 className="text-2xl font-bold text-center mb-4 text-black">Explore Now</h2>

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" 
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>

              <button type="button" className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>
        )}
    </section>
  )
}
 
export default BannerSection