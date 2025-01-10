import React, { useEffect, useState } from 'react'
import axios from 'axios'
function CheckBox() {
    const [selectedOption,setSelectedOption]=useState("General manager")
    const [roles,setRoles]=useState([])
    useEffect(()=>{
      const fetchRoles= async()=>{
        localStorage.getItem("token")
        try{
              const response = await axios.get("")

              
        }catch(error){

        }
      }
    })


     const handleChange=(e)=>{
        setSelectedOption(e.target.value)
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

              <option value="concert">General manager</option>
              <option value="conference">Chief Admin</option>
              

        </select>
    </div>
  )
}

export default CheckBox