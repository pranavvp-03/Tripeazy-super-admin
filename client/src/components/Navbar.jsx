import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaBell,
  FaClipboardList,
  FaCog,
  FaAd,
  FaBlog,
  FaUserShield,
  FaBuilding,
  FaBars,  // For mobile menu icon
  FaTimes, // For close icon
} from "react-icons/fa";

function Navbar() {
  const [allowedTabs, setAllowedTabs] = useState({});
  const [isOpen, setIsOpen] = useState(false); // Sidebar state

  useEffect(() => {
    const permissions = JSON.parse(localStorage.getItem("permissions"));
    setAllowedTabs(permissions || {});
  }, []);

  const tabs = [
    { id: "Home", label: "Home", path: "/home", icon: <FaHome /> },
    { id: "Agencies", label: "Agencies", path: "/agencies", icon: <FaBuilding /> },
    { id: "Users", label: "Users", path: "/users", icon: <FaUsers /> },
    { id: "Packages", label: "Packages", path: "/packages", icon: <FaClipboardList /> },
    { id: "Blogs", label: "Blogs", path: "/blogs", icon: <FaBlog /> },
    { id: "AdminList", label: "Admin List", path: "/admin-list", icon: <FaUserShield /> },
    { id: "ManageRole", label: "Manage Role", path: "/manage-role", icon: <FaCog /> },
    { id: "Advertisement", label: "Advertisement", path: "/advertisments", icon: <FaAd /> },
    { id: "Notifications", label: "Notifications", path: "/notifications", icon: <FaBell /> },
  ];

  const visibleTabs = tabs.filter(
    (tab) => allowedTabs[tab.id] && allowedTabs[tab.id].length > 0
  );

  return (
    <>
      {/* Mobile Navbar Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-lg p-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex flex-col w-64 text-slate-800 h-full bg-white shadow-lg">
        <div className="flex items-center justify-center h-20 border-b">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <div className="flex flex-col gap-2 p-3">
          {visibleTabs.map((tab) => (
            <NavLink
              key={tab.id}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  isActive ? "bg-custom-purple text-white shadow-md" : "hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-base">{tab.label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      >
        <div className="bg-white w-64 h-full shadow-lg p-5" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          >
            <FaTimes />
          </button>
          <div className="flex flex-col gap-3 mt-10">
            {visibleTabs.map((tab) => (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                    isActive ? "bg-custom-purple text-white shadow-md" : "hover:bg-gray-100"
                  }`
                }
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="text-base">{tab.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
