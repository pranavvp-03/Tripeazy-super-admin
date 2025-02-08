
import { useState } from "react"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"

const useSearch = () => {
  const[filteredAdmin,setFilteredAdmin]=useState([])
  const [error,setError]= useState("")
  
   const searchAdmin=useSelector(state=>state.role.Admins)
   const search = (searchQuery) => {
    if(!searchQuery.trim()){
      setFilteredAdmin([])
      setError("No search data is provided")
      return toast.error("No search data is provided")
    }
    const filteredResult= (searchAdmin.filter((admin) =>
      admin.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    ));
    if(filteredResult.length === 0){
      setError("No matching admin is found ")
      setFilteredAdmin([])
    }else{
      setError('')
      setFilteredAdmin(filteredResult)
      
    }
  
    
   
  }
  return {search,filteredAdmin,error}
}
export default useSearch