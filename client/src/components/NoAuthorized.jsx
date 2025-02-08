import React from 'react'
import { NavLink } from 'react-router-dom'


function NoAuthorized() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
    
    <img
      src="" 
      alt="No Access Illustration"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />

    
    <div className="relative bg-white p-10 shadow-2xl rounded-lg max-w-md text-center">
      <h1 className="text-4xl font-bold text-red-600">Access Denied 🤷‍♀️</h1>
      <p className="text-gray-700 mt-4">
        Sorry, you do not have permission to access this page. Please contact the administrator if you believe this is a mistake.
      </p>

      
      <div className="mt-6">
        <button
          onClick={() => window.location.href = '/'} 
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  </div>
  )
}

export default NoAuthorized