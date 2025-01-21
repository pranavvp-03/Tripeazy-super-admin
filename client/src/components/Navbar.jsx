import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [allowedTabs, setAllowedTabs] = useState({});

  useEffect(() => {
  
    const permissions = JSON.parse(localStorage.getItem("permissions"));
    setAllowedTabs(permissions || {});
    console.log(permissions); 
  }, []);

  const tabs = [
    { id: "Home", path: "/home" },
    { id: "Agencies", path: "/agencies" },
    { id: "Users", path: "/users" },
    { id: "Packages", path: "/packages" },
    { id: "Blogs", path: "/blogs" },
    { id: "CreateAdmin", path: "/create-admin" },
    { id: "Advertisments", path: "/advertisments" },
    { id: "Notifications", path: "/notifications" },
  ];

  
  const visibleTabs = tabs.filter((tab) => {
    return allowedTabs[tab.id] && Array.isArray(allowedTabs[tab.id]) && allowedTabs[tab.id].length > 0;
  });

  return (
    <div>
      {visibleTabs.map((tab) => (
        <div key={tab.id}>
          <NavLink to={tab.path}>
            <h4 className="text-center">{tab.id}</h4>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
