// import React, { useEffect } from 'react'
// import Navbar from '../components/Admin-navbar'
// import { useNavigate } from 'react-router-dom'


// function Home() {
//   const navigate = useNavigate();

//   const token = localStorage.getItem('token');
//   useEffect(()=>{
//     if(!token){
//       navigate('/');
//     }
//   },[token])
//   return (
//     <>

//   <h1>home page</h1>
  
//     </>
//   )
// }

// export default Home


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";
import CommonNav from "../components/CommonNav";




const data = [
  { name: "Jan", users: 120 },
  { name: "Feb", users: 200 },
  { name: "Mar", users: 150 },
  { name: "Apr", users: 180 },
  { name: "May", users: 250 },
];

export default function Home() {
  return (

  <>
    
   <CommonNav/>
    <div className="min-h-screen bg-[--background] text-[--foreground] p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">1,245</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">$12,340</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Users Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300} >
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="users" fill="#6D28D9" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>

    </>


  );
}
