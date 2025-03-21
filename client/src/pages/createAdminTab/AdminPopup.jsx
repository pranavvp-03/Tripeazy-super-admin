import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminPopup({ admin, onClose, onRoleUpdate }) {
  const [selectedAdmin, setSelectedAdmin] = useState(admin.role.roleName);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateRole, setUpdateRole] = useState("");

  
  const fetchRoles = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:3001/api/roles/get-role", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data && Array.isArray(response.data)) {
        setRoles(response.data); 
      } else {
        console.log("Unexpected API response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };


  useEffect(() => {
    setSelectedAdmin(admin.role.roleName);
    fetchRoles();
  }, [admin.role.roleName]);

  
  const handleRoleChange = (e) => {
    setUpdateRole(e.target.value);
  };

 
  const handleSave = async () => {
    if (!updateRole || updateRole === selectedAdmin) {
      toast.error("Please select a different role!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:3001/api/admins/updateRole/${admin._id}`,
        { role: updateRole },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      if (response.status === 200) {
        toast.success("Role updated successfully!");
        
       
        setSelectedAdmin(updateRole);
        if (onRoleUpdate) {
          onRoleUpdate(updateRole); 
        }

        fetchRoles();
        onClose(); 
      }
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update role");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Admin Details</h2>
        <p><strong>Name:</strong> {admin.name}</p>
        <p><strong>Email:</strong> {admin.email}</p>

        <select
          className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-custom-purple focus:outline-none"
          onChange={handleRoleChange}
          value={updateRole || selectedAdmin} 
        >
          <option value={selectedAdmin} className="uppercase text-base">
            {selectedAdmin} (current role)
          </option>

          {roles.length > 0 ? (
            roles.map((role, index) => (
              <option key={index} value={role.roleName}>
                {role.roleName}
              </option>
            ))
          ) : (
            <option>No roles available</option>
          )}
        </select>

        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPopup;
