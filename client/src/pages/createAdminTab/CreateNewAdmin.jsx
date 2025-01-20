import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CheckBox from './CheckBox';
import { useRef } from 'react';
import axios from 'axios';



function CreateNewAdmin() {
  const inputRef=useRef(null)
  const [image,setImage]=useState(null)
  const [position,setPosition]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [gender,setGender]=useState("")
   
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

  const handleSubmission= async (e)=>{
    e.preventDefault()
    // const formData = new FormData();
    // // formData.append("image",image)
    // formData.append("position",position)
    // formData.append("name",name)
    // formData.append("password",password)
    // formData.append("email",email)
    // formData.append("phoneNumber",phoneNumber)
    // formData.append("gender",gender)
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
    const response =  axios.post("http://localhost:3001/api/createNewAdmin/", inputs)
    const data= response
    console.log(data)

  }catch(error){
     console.log({error:error.message})
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
                to="/create-admin"
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
    
        <div className='flex justify-end text-right mt-10 mr-10 '>
      <NavLink
        to="/addrole"  
        className="  w-1/7 flex justify-end text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Create New role
      </NavLink>
    </div>

      
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
