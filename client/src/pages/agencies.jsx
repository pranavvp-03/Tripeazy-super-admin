import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ProfileDropdown from '../components/ProfileMenu';
import ProfileModal from './profilePop';
import toast from 'react-hot-toast';

function People() {
  const [agency, setAgency] = useState([]);
  const [isOpen,setIsOpen] =useState(false)
  const[status,setStatus]=useState([])
  const [acceptButton,setAcceptButton]=useState("Accept")
  const [rejectButton,setRejectButton]=useState("Reject")

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/agency/fetchAgency");
        if (Array.isArray(response.data)) {
          setAgency(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
        }
      } catch (error) {
        console.log("Can't get agencies", error);
      }
    };
    fetchAgencies();
  }, []);

  console.log("Agency data fetched successfully", agency);
  
  const handleButton = async (id,value)=>{
   console.log(id)
   console.log(value)

  //  if( e==="Accepted"){
    try{
       const response= await axios.put(`http://localhost:3001/api/agency/updateStatus/${id}`,{
        status:value

       })
       console.log(response.data)
       setAgency((prev)=>
        prev.map((agency)=>
          agency._id === id ?{...agency,status:value} :agency
        )
       )
       
       const data= response.data
       console.log(data)
       if(data.status=== "Accepted"){
        toast.success("You Accepted Agency")
        return
       }
       if(data.status === "Reject"){
        toast.error("You Rejected Agency")
        return 
      } 
         
      
     
    }catch(error){
      console.log(error)
    } 

 
   }
   const handleview= ()=>{
    setIsOpen(true)
   
    }
   


  return (
    <>
      <div>
        <nav className="bg-gray-900 border-gray-200 -mr-2 -mt-1 rounded-t-md flex flex-col items-center h-32">
          <div className="flex items-center justify-center w-full">
            <h1 className="text-white text-3xl mt-2">Manage Agencies</h1>
          </div>
          <div className="flex items-center justify-between w-full px-4 mt-2">
            <div className="flex items-center space-x-3">
              <a href="https://flowbite.com/">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              </a>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Trippeazy</span>
            </div>
            <div className="align-flex -mt-2">
              <ProfileDropdown />
            </div>
          </div>
          <div className='flex items-center justify-center w-full'>
            <NavLink
              to="/manage-Role"
              className={({ isActive }) =>
                `p-2 rounded-lg ${isActive ? " text-white text-lg underline decoration-blue-400" : "text-gray-600"}`
              }
            >
              Existing Role
            </NavLink>
            <NavLink
              to="/addrole"
              className={({ isActive }) =>
                `p-2 rounded-lg ${isActive ? "bg-blue-500 text-white" : "text-gray-600 font-sans hover:text-white hover:text-lg hover:underline decoration-blue-500 hover:scale-105 transition duration-700"}`
              }
            >
              Create New One
            </NavLink>
          </div>
        </nav>
      </div>
      <div className="bg-white p-8 rounded-md w-full">
        <div className="flex items-center justify-between pb-6">
          <div className="flex items-center">
            <div className="flex bg-gray-50 items-center p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input className="bg-gray-300 rounded-r-lg outline-none ml-1 block" type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
       
            <div  className="overflow-x-auto">
              <table className="min-w-full leading-normal shadow rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
                    <th className="px-5 py-3 text-left">Company Name</th>
                    <th className="px-5 py-3 text-left">Email</th>
                    <th className="px-5 py-3 text-left">Country</th>
                    {/* <th className="px-5 py-3 text-left">Registration Id</th> */}
                    <th className="px-5 py-3 text-left">Status</th>
                  </tr>
                </thead>
                {agency.length > 0 ? (
          agency.map((agencies) => (
                <tbody 
                key={agencies._id || agencies.id}
                className="divide-y divide-gray-100 border-t border-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-5 py-5 bg-white text-sm flex items-center gap-3">
                      <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt="" />
                      <span className="text-gray-900">{agencies.companyName}</span>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm text-gray-900">{agencies.email}</td>
                    <td className="px-5 py-5 bg-white text-sm text-gray-900">{agencies.country}</td>
                    {/* <td className="px-5 py-5 bg-white text-sm text-gray-900">{agencies.registrationId}</td> */}
                    <td className="px-5 py-5 bg-white text-sm">
                      < button 
                      data-id={agency?._id} 
                      value={agencies._id}
                      onClick={(e)=>handleButton(e.target.value,"Accepted")}
                      className=" mr-4 relative inline-block px-3 py-1 font-semibold text-green-900 bg-green-200 rounded-full">{agencies.status === "Accepted" ? "Accepted":"Accept"}</button>
                      <button 
                      data-id={agency._id}
                      value={agencies._id}
                      onClick={(e)=>handleButton(e.target.value,"Rejected")}

                      className=" ml-5  relative inline-block px-3 py-1 font-semibold text-white bg-red-600 rounded-full">{agencies.status ==="Rejected" ?"Rejected" :"Reject"}</button>
                    </td>
                    {/* <td className="px-5 py-5 bg-white text-sm">
                      
                    </td> */}
                    <button
                  
                    className="px-5 py-5 bg-white text-sm text-blue-600 underline">view more
                      
                    </button>
                    
                  </tr>
                  {/* {isOpen && <ProfileModal isOpens={isOpen} />} */}
                </tbody>
                
                 ))
                ) : (
                  <p className="text-center text-gray-500">No agencies found</p>
                )}
              </table>
              
            </div>
         
      </div>
    </>
  );
}

export default People;
