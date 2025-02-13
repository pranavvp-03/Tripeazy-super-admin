import React, { useState } from "react";
import axios from "axios";
import CheckBox from "./CheckBox";


function AdminPopup({admin,onClose}) {
    const [role,setRole]=useState(admin.role.roleName);
    const [loading,setLoading]=useState(false);

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
          alert("Role updated successfully!");
          onClose();
        } catch (error) {
          console.error("Error updating role:", error);
          alert("Failed to update role.");
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

        <CheckBox onSelect={handleRolechanges} selectedRole={role}/>

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