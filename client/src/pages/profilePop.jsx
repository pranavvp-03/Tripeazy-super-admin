import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Circles } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const location=useLocation()
  const agency=location.state?.agency
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [errors, setErrors] = useState({});

  const [Profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    gender: "",
  });
   console.log("this is agency from profile page",agency)
    
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    let tempErrors = {};
    if (!Profile.firstName) tempErrors.firstName = "First name is required";
    if (!Profile.lastName) tempErrors.lastName = "Last name is required";
    if (!Profile.username) tempErrors.username = "Username is required";
    if (!Profile.street) tempErrors.street = "Street is required";
    if (!Profile.country) tempErrors.country = "Country is required";
    if (!Profile.city) tempErrors.city = "City is required";
    if (!Profile.gender) tempErrors.gender = "Gender is required";
    if (!Profile.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (Profile.phone.length !== 10) {
      tempErrors.phone = "Phone number must be exactly 10 digits";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSave = async () => {
    if (validateFields()) {
      try {
        // API call to save profile
        toast.success("Profile details submitted successfully!");
      } catch (error) {
        toast.error("Failed to update profile");
      }
    }
  };

  return (
    <div className="min-h-screen p-4">
      <h2 className="text-xl font-bold text-gray-700">Welcome, {Profile.firstName} {Profile.lastName}</h2>
      <div className="bg-white rounded-lg shadow-lg mt-6 p-6 flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:w-1/3">
          <div
            className="relative h-24 w-24 md:w-32 md:h-32 rounded-full overflow-hidden border flex items-center justify-center bg-gray-200"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span className="text-5xl uppercase">
              {Profile.firstName ? Profile.firstName[0] : "?"}
            </span>
            {hovered && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
                <FaPlus className="text-white text-3xl cursor-pointer" />
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold mt-4">{Profile.firstName} {Profile.lastName}</h3>
        </div>

        <div className="flex-1">
          {[
            { label: "First Name", name: "firstName" },
            { label: "Last Name", name: "lastName" },
            { label: "Username", name: "username" },
            { label: "Country", name: "country" },
            { label: "City", name: "city" },
            { label: "Street", name: "street" },
            { label: "Phone", name: "phone", type: "tel" },
          ].map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">{field.label}:</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={Profile[field.name]}
                onChange={handleFieldChange}
                className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700">Gender:</label>
            <select
              name="gender"
              value={Profile.gender}
              onChange={handleFieldChange}
              className="mt-2 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-purple-600 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
            )}
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 m-2 hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profiles;
