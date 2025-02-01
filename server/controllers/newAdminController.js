// // const express= require("express")
// // const NewAdminModel  = require("../model/CreateNewAdmin")
const Admin =require("../model/Admin")
const Role =require("../model/role")



exports.getNewAdmin= async (req,res)=>{
  console.log("admin data fetching...")
  
  try{
    const admins = await Admin.find({ name: { $ne: "superadmin" } }).populate("role");
    res.status(200).send({message:"Admins fetched successfully",admins})
    console.log(admins)
  }
  catch(error){
     res.status(500).send(err.message)
     
  }
}


