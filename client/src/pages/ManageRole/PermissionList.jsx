import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
// import { setPermissions } from '../redux/actions/roleAction'
import toast from "react-hot-toast";


function PermissionList({roleName,description}) {
   
  const [selectedValues,setSelectedValues]=useState({
    Home:[],
    Agencies:[],
    Users:[],
    Packages:[],   
    Blogs:[],
    AdminList:[],
    ManageRole:[], 
    Advertisement:[],
    Notifications:[],
  })
  const dispatch=useDispatch()
  const role = useSelector(state => state.role.Permissions);

  const handleCheckbox=(e,parent)=>{
       const {checked,value}=e.target
       
       setSelectedValues((preValues)=>{
       const updatedValue=checked?
       [...(preValues[parent]|| []),value]
       :preValues[parent].filter((item)=> item !==value) || []
       return {
        ...preValues,
        [parent]:updatedValue
       }
       })
  }

  // console.log(selectedValues)
  // const {roleName,description}=props

  const permissions = selectedValues
  console.log(roleName,description,permissions)
  const handleSubmit=async (e)=>{
    e.preventDefault()
    const token = localStorage.getItem('token');
  
    try{
     const response= await axios.post("http://localhost:3001/api/roles/create-role",{roleName,description,permissions},{headers:{Authorization:`Bearer ${token}`}})
     console.log(response,"from recieved");
     if(!response){
      
      toast.error("No Response from the  Server")
     
       console.log("There is no response to recieve")
       return
     }
     if(response.status === 400){
      toast.error("The request is too bad")
      return
     }
     
     if(response.status===201){
     console.log("response successfully recieved")
    //  dispatch(setPermissions(response.data))
    //  console.log(role);
     toast.success(`Role Created Successfully😎`)
    
    
     
    
   
     return
     }
     
    }catch(error){
     console.log(error.message,"faied frm server");
     toast.error("An error occured try  again")

    }
   
}


  return (
    <div>
          <div className="items-center mt-10">
    <h1 className="mb-4 font-bold text-gray-900 dark:text-dark">Tabs and Permissions</h1>
    <div className="w-1/2 items-center">
      <ul className=" items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className="  bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5  ">
            
            <label
              htmlFor="vue-checkbox-list"
              className="   w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Home
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="view"
             onChange={(e)=>{handleCheckbox(e, "Home")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "Home")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className="  bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "Home")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3 ">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              // onClick={handleCheckbox(e,"Home")}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>
      <ul className=" mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
             Agencies
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-10">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="view"
              onChange={(e)=>{handleCheckbox(e, "Agencies")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "Agencies")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "Agencies")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>
      <ul className=" mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Users
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-10">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="view"
              onChange={(e)=>{handleCheckbox(e, "Users")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "Users")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "Users")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>
      <ul className=" mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Packages
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="View"
              onChange={(e)=>{handleCheckbox(e, "Packages")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "Packages")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "Packages")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>
      <ul className=" mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Blogs
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple  w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="View"
              onChange={(e)=>{handleCheckbox(e, "Blogs")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className="  bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "Blogs")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className="  bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "Blogs")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>
      <ul className="  mt-3 flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Admin List 
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="View"
              onChange={(e)=>{handleCheckbox(e, "AdminList")}}
              className=" ml-10 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "AdminList")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "AdminList")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>


      <ul className=" mt-3 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
             Manage Role
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-10">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="view"
              onChange={(e)=>{handleCheckbox(e, "ManageRole")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "ManageRole")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "ManageRole")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>

      <ul className="  mt-3 flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 -ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Advertisement
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="View"
              onChange={(e)=>{handleCheckbox(e, "Advertisement")}}
              className=" ml-10 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "Advertisement")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "Advertisement")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>
      <ul className="  mt-3 flex items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3 ml-5">
            
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
            >
              Notification
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2  border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value="View"
              onChange={(e)=>{handleCheckbox(e, "Notifications")}}
              className=" ml-10 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              View
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value="Edit"
              onChange={(e)=>{handleCheckbox(e, "Notifications")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Edit
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value="Delete"
              onChange={(e)=>{handleCheckbox(e, "Notifications")}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="angular-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Delete
            </label>
          </div>
        </li>
        <li className=" bg-custom-purple w-1/2 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="laravel-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              All
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div className='text-center mt-10 mr-10'>
        <button type="button" 
        onClick={handleSubmit}
        className="flex-justify-end text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add New</button>
        </div>
  </div>
  
    </div>
  )
}

export default PermissionList