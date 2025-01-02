import React from 'react'
import { NavLink } from 'react-router-dom'
import PermissionList from './PermissionList'
function Addrole() {
  return (


    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
           
            <div className="flex md:order-2">
             
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  
                </div>
               
              </div>
             
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            
              <div className="flex flex-col items-start">
  <h1 className="text-white text-2xl mb-4">Manage Admin</h1>
  <ul className="flex p-4 md:p-0 space-x-4">
    <li>
    
    </li>
    <li>
    
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
        <div class="mb-6">
    <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
    <input type="text" id="large-input" class="block w-4/5 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500bg-F5F6FA dark:border-gray-600 dark:placeholder-dark-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </input>
</div>
        </div>
      <PermissionList/>
      
      
     </div>
  )
}

export default Addrole