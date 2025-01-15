import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CheckBox from './CheckBox';
import { useRef } from 'react';


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
    const formData= new formData()
    formData.append("image",image)
    formData.append("position",position)
    formData.append("name",name)
    formData.append("password",password)
    formData.append("email",email)
    formData.append("phoneNumber",phoneNumber)
    formData.append("gender",gender)
  try{
    const response =  await ("http://localhost:3001/api/createNewAdmin",formData)
    const data= response.data
    console.log(data)

  }catch(error){
     console.log({error:error.message})
  }
}

  
  return (
    <>
    <div>
        <nav className=" border-gray-200 bg-nav-white -mt-1   ">
          {/* <div className="max-w-screen-xl   h-flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Trippeazy
              </span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div> */}
              <div className="flex flex-col items-start">
  <h1 className="text-dark text-3xl mb-4 ">Manage Admin</h1>


  {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
    <li>
      <NavLink
        to="/create-admin"
        className={({ isActive }) =>
          `block py-2 px-3 rounded md:bg-transparent md:p-0 ${
            isActive
              ? 'text-white bg-blue-700'  // Home active color
              : 'text-gray-900 hover:text-blue-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
          }`
        }
        aria-current="page"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/createNewAdmin"
        className={({ isActive }) =>
          `block py-2 px-3 rounded md:bg-transparent md:p-0 ${
            isActive
              ? 'text-white bg-blue-700'  // About active color
              : 'text-gray-900 hover:text-blue-500 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
          }`
        }
      >
        About
      </NavLink>
    </li>
  </ul>
</div> */}







  <ul className="flex p-4 md:p-0 space-x-4">
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

            {/* </div> */}
          {/* </div> */}
        </nav>
    
        <div className='flex justify-end text-right mt-10 mr-10'>
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
            className=" bg-customGray border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  bg-customGray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-F5F6FA dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
