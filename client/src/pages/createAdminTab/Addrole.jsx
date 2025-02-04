import React, { useState ,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import PermissionList from '../PermissionList'
// import axios from 'axios'
function Addrole() {
  // const navigate=useNavigate()
//  useEffect(()=>{
//     const permission = JSON.parse(localStorage.getItem("permissions"));
//     // console.log(permission.CreateAdmin)
//     if(!permission.CreateAdmin <=0){
//       navigate("/notAuthorized")
//     }
  
//   },[navigate])


const [role,setRole]=useState("")
const [description,setDescription]=useState("")


console.log(role)
console.log(description)
//  const props={role,description}
//  console.log(props)

  return (


    <div>
      <nav className=" border-gray-200  bg-nav-white -mt-1 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
           
            <div className="flex md:order-2">
             
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  
                </div>
               
              </div>
             
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div class=" mt-0 flex justify-between gap-2">
    <a href="/createNewAdmin"
        class=" -mt-3 inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
            </path>
        </svg>
        
    </a>
    </div>
            
              <div className="flex flex-col items-start">
             
  <h1 className=" ml-6 mt-6 text-dark text-4xl mb-4">Manage Admin</h1>
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
            value={role}
            onChange={(e)=>setRole(e.target.value)}
            className="bg-input-white  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <h2 className='mt-5 font-bold'>Description</h2>
        <div className="mb-6">
    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
    <input type="text" id="large-input" 
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
    className="block w-4/5 p-4 text-gray-900 border border-gray-300 rounded-lg bg-input-white text-base focus:ring-blue-500 focus:border-blue-500bg-F5F6FA dark:border-gray-600 dark:placeholder-dark-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </input>
</div>
        </div>
      <PermissionList roleName={role} description={description}/>
     
      
     </div>
  )
}

export default Addrole