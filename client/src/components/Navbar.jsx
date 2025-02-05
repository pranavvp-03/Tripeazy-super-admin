import React, {  useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaBell,
  FaPlus,
  FaUser,
  FaEnvelope,
  FaRegCalendarAlt 
} from "react-icons/fa";


function Navbar() {
  const [allowedTabs, setAllowedTabs] = useState({});
  useEffect(()=>{
    
  const permissions = JSON.parse(localStorage.getItem("permissions"));
  console.log(permissions);
 
  // console.log(permissions); 
  setAllowedTabs(permissions || {});
  
  },[])

  console.log(allowedTabs)

 

  const tabs = [
    { id: "Home", path: "/home", icon: <FaHome /> },
    { id: "Agencies", path: "/agencies", icon: <FaHome /> },
    { id: "Users", path: "/users", icon: <FaUsers /> },
    { id: "Packages", path: "/packages", icon: <FaHome /> },
    { id: "Blogs", path: "/blogs", icon: <FaHome /> },
    { id: "CreateAdmin", path: "/create-admin", icon: <FaHome /> },
    { id: "Advertisement", path: "/advertisments", icon: <FaHome /> }, 
    { id: "Notifications", path: "/notifications", icon: <FaHome /> }, 
  ];
  

  
  const visibleTabs = tabs.filter((tab) => {
    return allowedTabs[tab.id] && (allowedTabs[tab.id]) && allowedTabs[tab.id].length > 0;
  });

  return (
    <div className="text-left hidden md:flex flex-col w-64 text-slate-800 h-full">
      <div className="flex items-center justify-center h-20 border-b">
        <FaUser className="grid justify-items-start ... margin-left-20px"/>
          <h1 className="text-2xl font-bold"> Admin</h1>
        </div>
      {visibleTabs.map((tab) => (
        <div key={tab.id} className="h-100">
          <NavLink to={tab.path}
           className={({ isActive }) =>
            `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
          }>
            <span>{tab.icon }</span>
            <h1 className="">{tab.id}</h1>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
