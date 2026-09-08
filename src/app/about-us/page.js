import React from 'react';

function AboutUs() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mt-10 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are passionate about delivering the best products and experiences to our customers. 
          Our journey started with a simple idea and has grown into a community.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
        
        {/* Left Side - Image */}
        <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
            alt="Our Team" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Text & Mission */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            At our core, we believe in innovation, quality, and customer satisfaction. 
            Every product we build is designed with the user in mind. We strive to create 
            solutions that make everyday life easier and more enjoyable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            With a dedicated team of professionals, we continuously push the boundaries 
            of what's possible, ensuring that we stay ahead of the curve in a rapidly 
            evolving industry.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300">
            Join Our Team
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default AboutUs;