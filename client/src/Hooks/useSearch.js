// import React from 'react'

import { useState } from "react"
import { useSelector } from "react-redux"

const useSearch = () => {
  const[filteredAdmin,setFilteredAdmin]=useState([])
  
   const searchAdmin=useSelector(state=>state.role.Admins)
   const search = (searchQuery) => {
    setFilteredAdmin(searchAdmin.filter((admin) =>
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    ));
  
    
   
  }
  return {search,filteredAdmin}
}
export default useSearch