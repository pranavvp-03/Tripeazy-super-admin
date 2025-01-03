import React, { useEffect } from 'react'
import Navbar from '../components/Admin-navbar'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useEffect(()=>{
    if(!token){
      navigate('/');
    }
  },[token])
  return (
    <>

  <h1>home page</h1>
  
    </>
  )
}

export default Home
