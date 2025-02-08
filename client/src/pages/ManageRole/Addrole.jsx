import React, { useState ,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PermissionList from './PermissionList'
// import axios from 'axios'
function Addrole() {
  const navigate=useNavigate()
//  useEffect(()=>{
//     const permission = JSON.parse(localStorage.getItem("permissions"));
//     console.log(permission.CreateAdmin)
//     if(!permission.CreateAdmin <= 0){
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
      <nav className=" border-gray-200 bg-background-white -mt-1   ">
               
                    <div className="flex flex-col items-start">
        <h1 className="text-dark text-3xl mb-4 mt-2 ml-4 ">Manage Admin</h1>
      
           <ul className="flex p-4 md:p-0 space-x-4 mt-4">
          <li> 
            <NavLink
                      to="/manage-Role"
                       className={({ isActive }) =>
                         `p-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-600 font-sans  hover:text-black hover:text-lg hover:underline decoration-blue-400  hover:shadow-sm transition duration-700"}`
                       }
                     >
                       Existing Roles
                     </NavLink>
                 </li>
                 <li>
                      <NavLink
                       to="/addrole"
                       className={({ isActive }) =>
                         ` p-2 rounded-lg${isActive ? "  text-dark text-lg underline decoration-blue-400 scale-105 shadow-sm" : "text-gray-600 hover:text-white"}`
                       }
                     >
                       Create New 
                     </NavLink>
      
             </li>
        </ul> 
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