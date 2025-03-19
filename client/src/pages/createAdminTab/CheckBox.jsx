import React, { useEffect, useState } from 'react'
import axios from 'axios'
 import { useDispatch } from 'react-redux'
 import { useSelector } from 'react-redux'
 import { getRoles } from '../../redux/actions/roleAction'

function CheckBox({onSelect,selectedRole}) {
    const [selectedOption,setSelectedOption]=useState("General manager")
    const [roles,setRoles]=useState([])

    const dispatch=useDispatch()
   
     const Getroles=useSelector(state=>state.role.Role ?? [])
     console.log(Getroles ,"this is getRole");
     
   
    useEffect(()=>{
      const fetchRoles= async()=>{
        const token = localStorage.getItem("token")
        try{
              const response = await axios.get('http://localhost:3001/api/roles/get-role',{
                headers:{
                  'Authorization':`Bearer ${token}`,
                   "Content-Type" :  'application/json',
                }
              })
              if(!response){
                console.log("no response for getting role")
              }
              const data= await response.data
              console.log(response.data)
              localStorage.setItem("role",JSON.stringify(response.data))
              dispatch(getRoles(response.data))
            
              console.log(Getroles)
             

              
        }catch(error){
          console.error('Error fetching roles:', error);
        }
      }
      fetchRoles()
    },[])


     const handleChange=(e)=>{
      const value=e.target.value
        setSelectedOption(value)
      onSelect(value)
      // console.log(value)

     }
  return (
    <div>

<label className="block text-sm font-semibold text-dark">
              Position
            </label>
            <select
              name="Admin"
              value={selectedOption}
              onChange={handleChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-custom-purple focus:outline-none"
            >
             
                 {Array.isArray(Getroles.roles) && Getroles.roles.length > 0 ? (
                    Getroles.roles.map((role, index) => (
                        <option key={index} value={role.roleName}>
                            {role.roleName}
                        </option>
                    ))
                ) : (
                    <option>No roles available</option>
                )}
              
              

        </select>
    </div>
  )
}

export default CheckBox