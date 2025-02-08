
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaBell,
  FaPlus,
  FaUser,
  FaEnvelope,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const UserNavbar = () => {
  const permissions = useSelector((state)=>state.role.permissions);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      
      <div className="hidden md:flex flex-col w-64 text-slate-800 h-full">
        <div className="flex items-center justify-center h-20 border-b">
          <h1 className="text-2xl font-bold">Super Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          >
            <FaHome />
            Home
          </NavLink>
          <NavLink
            to="/agencies"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          >
            <FaUsers />
            Agencies
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          >
            <FaHome />
            Users
          </NavLink>
          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          > 
            <FaRegCalendarAlt />
            Packages
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          >
            <FaEnvelope />
            Blogs
          </NavLink>
          <NavLink
            to="/Admin-List"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          >
            <FaBell />
            Admin List
          </NavLink>
          <NavLink
            to="/advertisments"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          >
            <FaPlus />
            Advertisments
          </NavLink>
          <NavLink
            to="/notifications"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-custom-purple text-white" : ""}`
            }
          >
            <FaUser />
            Notifications
          </NavLink>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-lg border-t">
        <nav className="flex justify-around p-2 text-slate-800">
          <button onClick={toggleSidebar} className="flex flex-col items-center gap-1">
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            <span className="text-xs">Menu</span>
          </button>
          
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? "text-blue-500" : ""}`
            }
          >
            <FaEnvelope  size={20}/>
            <span className="text-xs">Messages</span>
          </NavLink>
          <NavLink
            to="/profile-settings"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${isActive ? "text-blue-500" : ""}`
            }
          >
            <FaUser size={20} />
            <span className="text-xs">Profile</span>
          </NavLink>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          ></div>
          <div className="fixed inset-y-0 left-0 bg-white w-64 z-50 shadow-lg flex flex-col">
            <div className="flex items-center justify-center h-20 border-b">
              <h1 className="text-2xl font-bold">Super Admin</h1>
            </div>
            <nav className="flex-1 p-4 space-y-4">
              <NavLink
                to="/home"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaHome />
                Home
              </NavLink>
              <NavLink
                to="/people"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaUsers />
                Agencies
              </NavLink>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            <FaEnvelope />
            Users
          </NavLink>
              <NavLink
                to="/housing"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaHome />
                Packages
              </NavLink>
              <NavLink
                to="/events"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaHome />
                Blogs
              </NavLink>
              <NavLink
                to="/notifications"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaBell />
                Admin List
              </NavLink>
              <NavLink
                to="/create-post"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}`
                }
              >
                <FaPlus />
                Advertisments
              </NavLink>
              <NavLink
                to="/profile-settings"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl ${isActive ? "bg-blue-600 text-white" : ""}` 
                }
              >
                <FaUser />
                Notifications
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default UserNavbar;
