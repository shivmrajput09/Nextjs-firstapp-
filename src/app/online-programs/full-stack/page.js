import React from 'react'

function FullStack() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-16 pt-32">
      
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h1 className="text-3xl font-bold text-black mb-4">
          Full Stack Web Development (MERN)
        </h1>
        
        <p className="text-gray-600 text-lg mb-6">
          Master both frontend and backend technologies. Learn MongoDB, Express.js, React.js, and Node.js to build complete, real-world web applications from scratch.
        </p>
        
        <div className="flex gap-4 mb-8">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">React.js</span>
          <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded">Node.js</span>
          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">MongoDB</span>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition shadow-sm">
          Enroll Now
        </button>
      </div>

    </div>
  )
}

export default FullStack