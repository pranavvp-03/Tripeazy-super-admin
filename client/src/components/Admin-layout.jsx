import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AdminNavbar from "./Admin-navbar";

const AdminDashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* <AdminNavbar /> */}
      <Navbar/>
        <div className="flex-1 p-1 overflow-auto bg-lightBg">
        
      <Outlet />
      </div>
    </div>  
  );
};

export default AdminDashboardLayout;