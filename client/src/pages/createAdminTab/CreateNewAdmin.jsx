import React, { useEffect, useState } from 'react';
import { data, NavLink } from 'react-router-dom';
import CheckBox from './CheckBox';
import { useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




function CreateNewAdmin() {
  const navigate= useNavigate()
  const allowedTabs=useSelector(state=>state.auth.permissions)
  // useEffect(()=>{
  //   const permission = JSON.parse(localStorage.getItem("permissions"));
  //   // console.log(permission.CreateAdmin)
  //   if(!permission.CreateAdmin <=0){
  //     navigate("/notAuthorized")
  //   }
  
  // },[navigate])

  // useEffect(()=>{
  //   console.log(allowedTabs)
  //  },[])
  // useEffect(()=>{
  //   console.log(allowedTabs,"allowed tabs")
  //   if(allowedTabs === null){
  //     navigate("/notAuthorized")
  //   }
  // },[navigate])
  console.log(allowedTabs,"from allowed tabs redux")
  const inputRef=useRef(null)
  const [image,setImage]=useState(null)
  const [position,setPosition]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [gender,setGender]=useState("")
  const [errors,setErrors]=useState({})
  
   
  const handlePosition=(role)=>{
    setPosition(role)
    console.log(position)
  }
  console.log(name,password,email,phoneNumber,gender)
  const handleClick=(e)=>{
   inputRef.current.click()
  }
  const handleImage=(e)=>{
    const file=e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); 
    }
    
    console.log("Is it a File object?", file instanceof File);
    
  }

  const validate =()=>{
    const newErrors={}
    if(!name.trim()) newErrors.name="Name is required"
    if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = 'Valid email is required.';
    if (!password.trim() || password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (!phoneNumber.trim() || !/^\d{10}$/.test(phoneNumber))
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    if (!gender.trim()) {
      newErrors.gender = 'Gender is required.';
    } else if (gender[0] !== gender[0].toUpperCase()) {
      newErrors.gender = 'Gender must start with a capital letter.';
    }
    if (!position.trim()) newErrors.position = 'Role is required.';

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 
  }

  const handleSubmission= async (e)=>{
    e.preventDefault()
    if(!validate()) return 
    // const formData = new FormData();
    // // formData.append("image",image)
   
    const inputs ={
      position,
      name,
      password,
      email,
      phoneNumber,
      gender
    }
    // console.log(inputs);

    
    
    
  try{
    const response =  axios.post("http://localhost:3001/api/register", inputs)
    console.log(response,"from response")
    toast.success("Admin Created Successfully😎")

  }catch(error){
    console.log(error,"from catch")
     
  }
}

  
  return (
   
    <>
   
    <div>
        <nav className=" border-gray-200 bg-background-white -mt-1   ">
         
              <div className="flex flex-col items-start">
  <h1 className="text-dark text-3xl mb-4 mt-2 ml-4 ">Manage Admin</h1>

     <ul className="flex p-4 md:p-0 space-x-4 mt-4">
    <li> 
      <NavLink
                to="/Admin-List"
                 className={({ isActive }) =>
                   `p-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-600 font-sans  hover:text-black hover:text-lg hover:underline decoration-blue-400  hover:shadow-sm transition duration-700"}`
                 }
               >
                 Members
               </NavLink>
           </li>
           <li>
                <NavLink
                 to="/createNewAdmin"
                 className={({ isActive }) =>
                   ` p-2 rounded-lg${isActive ? "  text-dark text-lg underline decoration-blue-400 scale-105 shadow-sm" : "text-gray-600 hover:text-white"}`
                 }
               >
                 New Admin
               </NavLink>

       </li>
  </ul> 
  </div>

           
          
        </nav>
    
       

      
    </div>
    <div className=''>
      <div className="">
  <div 
  className="flex flex-col items-center justify-center h-[300px] h-1/4 -mt-5 space-y-2">
    <span className="inline-block w-[62px] h-[62px] bg-gray-100 rounded-full overflow-hidden" onClick={handleClick}>
       {image ? <img src={image}
             
             className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
             alt="" /> : <img
             src="Design Studio.jpg"
             className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
             alt="Profile"
           />}
    </span>
    <p>Add Profile</p>
    <input type="file" 
    ref={inputRef}
    onChange={handleImage}
    className='  hidden className="bg-blue-500 text-white text-sm px-2 py-1 rounded cursor-pointer"'/>
  </div>
</div>

     
      <div className="grid grid-cols-12 gap-4 mb-5">
      
        <div className=" w-3/4 col-span-6 ml-20 ">
          <label
            htmlFor="input-6"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
         Name
          </label>
          <input
            type="text"
            id="input-6"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className=" bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-customGray dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        
        <div className=" w-3/4 col-span-6 ">
          <label
            htmlFor="input-2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark "
          >
            Password
          </label>
          <input
            type="text"
            id="input-2"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
          
        <div className=" w-3/4 col-span-6 ml-20">
          <label
            htmlFor="input-2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark "
          >
           Email
          </label>
          <input
            type="text"
            id="input-2"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className=" w-3/4 col-span-6 ">
          <label
            htmlFor="input-2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark "
          >
            Phone Number
          </label>
          <input
            type="text"
            id="input-2"
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>
       
        <div className='w-3/4 col-span-6 ml-20'>
        <CheckBox onSelect={handlePosition}/>
        </div>
        <div className=" w-3/4 col-span-6 ">
          <label
            htmlFor="input-2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark "
          >
           Gender
          </label>
          <input
            type="text"
            id="input-2"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

        </div>
      </div>
      <div className='text-center mt-10 mr-10'>
        <button type="sumbit" 
        onClick={handleSubmission}
        class="flex-justify-end text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add New</button>
        </div>
       
    </div>
    
    </>
  );
}

export default CreateNewAdmin;
