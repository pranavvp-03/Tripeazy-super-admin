import React from 'react'
import { NavLink } from 'react-router-dom'
import PermissionList from './PermissionList'
function Addrole() {
  return (


    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Trippeazy
              </span>
            </a> */}
            <div className="flex md:order-2">
              {/* <button
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
              </button> */}
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  {/* <svg
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
                  </svg> */}
                </div>
                {/* <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                /> */}
              </div>
              {/* <button
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
              </button> */}
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              {/* <div className="relative mt-3 md:hidden">
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
              </div> */}
              <div className="flex flex-col items-start">
  <h1 className="text-white text-2xl mb-4">Manage Admin</h1>
  <ul className="flex p-4 md:p-0 space-x-4">
    <li>
      {/* <a
        href="#"
        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        aria-current="page"
      >
        Members
      </a> */}
     {/* <NavLink
          to="/create-admin"
          className={({ isActive }) =>
            `p-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-600"}`
          }
        >
          Members
        </NavLink> */}
    </li>
    <li>
    {/* <NavLink
          to="/createNewAdmin"
          className={({ isActive }) =>
            `p-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-600"}`
          }
        >
          New
        </NavLink> */}
    </li>
  </ul>
</div>

            </div>
          </div>
        </nav>
        <div>
          <h1 className='mt-5 font-bold'>
            Create New Role
          </h1>
          <div className=" w-3/4 col-span-6 ">
          <label
            htmlFor="input-2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark "
          >
            
          </label>
          <input
            type="text"
            id="input-2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <h2 className='mt-5 font-bold'>Description</h2>
        <p>
        An Admin Role typically refers to a user role within an application or system that has elevated permissions compared to regular users.  <br /> Admins are responsible for managing and overseeing specific aspects of the platform, ensuring smooth operation and security. <br />Key responsibilities may include:
        </p>
        </div>
      <PermissionList/>
      
      
     </div>
  )
}

export default Addrole