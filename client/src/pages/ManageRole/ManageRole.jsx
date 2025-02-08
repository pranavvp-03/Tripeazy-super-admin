import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function ManageRole() {

  useEffect(()=>{
       
       const fetchRoles = async ()=>{
        const token= localStorage.getItem("token")
        try{
         const response = await axios.get('http://localhost:3001/api/roles/get-role',{
          headers:{
            'Authorization' : `Bearer ${token} `
          }
         })
          const data= response.data
          console.log(data);
          

        }catch(error){
         console.log(error.data,"error occured while fetching role at manage role");
                  
        }
       
       }
       fetchRoles()
  },[])
  return (
    <div>
       <nav className="bg-white border-gray-200 dark:bg-gray-900 -mt-1">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                      src="https://flowbite.com/docs/images/logo.svg"
                      className="h-8"
                      alt="Flowbite Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                      Trippeazy
                    </span>
                  </a>
                  <div className="flex md:order-2">
                    <button
                    // onClick={handleSearch}
                      type="button"
                      aria-controls="navbar-search"
                      aria-expanded="false"
                      className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        // value={searchInput}
                        // onChange={(e)=>setSearchInput(e.target.value)}
                        // onKeyDown={handleKey}
                      />
                    </div>
                    <button
          // onClick={handleLogout} 
          className="ml-4 text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
        >
          Logout
        </button>
                   
                  
                  </div>
                  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                      />
                    </div>
                    <div className="flex flex-col items-start">
        <h1 className="text-white text-3xl mb-4 ml-0">Manage Role</h1>
        
        <ul className="flex p-4 md:p-0 space-x-4">
          <li>
           
           <NavLink
                to="/manage-Role"
                className={({ isActive }) =>
                  `p-2 rounded-lg ${isActive ? " text-white  text-lg underline decoration-blue-400" : "text-gray-600"}`
                }
              >
                Existing Role
              </NavLink>
          </li>
          <li>
          <NavLink
                to="/addrole"
                className={({ isActive }) =>
                  `p-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-600 font-sans  hover:text-white hover:text-lg hover:underline decoration-blue-500 hover:scale-105 hover:shadow-lg transition duration-700"}`
                }
              >
                Create New one              </NavLink>
          </li>
        </ul>
      </div>
      
                  </div>
                </div>
              </nav>
              <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Phone</th>
            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">johndoe@gmail.com</td>
            <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
            <td className="py-4 px-6 border-b border-gray-200">
              <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">Active</span>
            </td>
          </tr>
       
          
          
        </tbody>
      </table>
    </div>



    </div>
  )
}

export default ManageRole