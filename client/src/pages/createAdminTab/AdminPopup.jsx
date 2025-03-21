import React, { useEffect, useState } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";


function AdminPopup({admin,onClose}) {
   const [selectedAdmin,setSelectedAdmin]=useState([])
    const [roleNames,setRoleNames]=useState({})
    const [role,setRole]=useState(admin.role.roleName);
    const [loading,setLoading]=useState(false);
    const Getroles=useSelector(state=>state.role.Role ?? [])
    
    
    console.log(Getroles,"this is role ")
    useEffect(()=>{
      setSelectedAdmin(admin.role.roleName)
      
    },[])
    console.log(selectedAdmin)


   
    const handleRolechanges = (selectedRole)=>{
        setRole(selectedRole)
    }

    const handleSave = async () => {
        setLoading(true);
        try {
          await axios.put(`http://localhost:3001/api/admins/updateRole/${admin._id}`, 
            { role: role },
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
          );
          // alert("Role updated successfully!");
          toast.success("Role updated succesfully!")
          onClose();
        } catch (error) {
          console.error("Error updating role:", error);
          // alert("Failed to update role.");
          toast.error("Failed to update role")
          
        } finally {
          setLoading(false);
        }
      };

      return (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Admin Details</h2>
        <p><strong>Name:</strong> {admin.name}</p>
        <p><strong>Email:</strong> {admin.email}</p>
       <select name="" id=""
       className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-custom-purple focus:outline-none">
        <option value="selectedAdmin">{selectedAdmin}(current)</option>
        <CheckBox/>
      
{/*        
        {Array.isArray(Getroles.roles) && Getroles.roles.length > 0 ? (
                    Getroles.roles.map((role, index) => (
                        <option key={index} value={role.roleName}>
                            {role.roleName}
                        </option>
                    ))
                ) : (
                    <option>No roles available</option>
                )} */}
        </select>
        

        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded mr-2" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
        </>
      )
}

export default AdminPopup