import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
function CreateAdmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const[admins,setAdmin]=useState([])

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  useEffect(()=>{
      const fetchAdmins = async ()=>{
        try{
             const response= await  axios.get("http://localhost:3001/api/admins/getAdmin")
             const data= response.data.admins
             console.log(response.data.admins)
              setAdmin(data)
              // console.log(data)

        }catch(error){ 
         console.log(error.message)
        //  console.log("catch block")
        }
      }
      
      fetchAdmins()

  },[])
 
 
console.log(admins)

  return (
    <>
      
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
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
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
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
  <h1 className="text-white text-2xl mb-4">Manage Admin</h1> 
  <ul className="flex p-4 md:p-0 space-x-4">
    <li>
     
     <NavLink
          to="/create-admin"
          className={({ isActive }) =>
            `p-2 rounded-lg ${isActive ? " text-white  text-lg underline decoration-blue-400" : "text-gray-600"}`
          }
        >
          Members
        </NavLink>
    </li>
    <li>
    <NavLink
          to="/createNewAdmin"
          className={({ isActive }) =>
            `p-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-600 font-sans  hover:text-white hover:text-lg hover:underline decoration-blue-500 hover:scale-105 hover:shadow-lg transition duration-700"}`
          }
        >
          New
        </NavLink>
    </li>
  </ul>
</div>

            </div>
          </div>
        </nav>
       
        {/* w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-300 ml-20 mt-20 */}
        {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 mt-5 */}
        
    <div className="">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10 mt-5">
        {admins.map((admin) => (
          <div
            key={admin._id}
            className="flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 dark:border-gray-600"
          >
           
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
              alt="Admin image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{admin.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{admin.position}</span>

            {/* Dropdown Button */}
            {/* <div className="flex justify-end px-4 pt-4">
              <button
                onClick={() => toggleDropdown(admin._id)}
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button> */}
              {/* {dropdowns[admin._id] && (
                <div
                  id="dropdown"
                  className="z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        More Info
                      </a>
                    </li>
                  </ul>
                </div>
              )} */}
            {/* </div> */}
          </div>
        ))}
      </div>
      </div>
     
    </>
  );
}

export default CreateAdmin;
