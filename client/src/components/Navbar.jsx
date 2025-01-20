import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
const allowedTabs=useSelector(state=>state.role.Role)

console.log(allowedTabs)
const tabs=
    {
        id:"Home",path:"/home",
        id:"Agencies",path:"/agencies",
        id:"Users",path:"/users", 
        id:"Packages",path:"/packages",
        id:"Blogs",path:"/blogs",
        id:"CreateAdmin",path:"/create-admin",
        id:"Advertisments",path:"/advertisments",
        id:"Notifications",path:"/notifications",
       


    } 


  
  const  visibleTabs= tabs.filter((tab)=>{
    allowedTabs.role[tab.id]  
  })




  return (
    <div>
   
         {visibleTabs.map((tab)=>{
            <NavLink to={tabs.path}>
            <h4>{tab.id}</h4>
            </NavLink>
         })}
    </div>
  )
}

export default Navbar
 