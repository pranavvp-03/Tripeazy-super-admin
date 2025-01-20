const express= require("express")
const NewAdminModel  = require("../model/CreateNewAdmin")

 exports.createNewAdmin = async (req,res)=>{
   
   //  file= req.file
    const {name,password,email,phoneNumber,gender,position}=req.body
    console.log(name,password,email,phoneNumber,gender,position)
    try{
     const newAdmin =  new NewAdminModel ({
      name,
      password,
      email,
      phoneNumber,
      gender,
      position,
      // file
     })
     
     await  newAdmin.save()
    res.status(200).json({message:"Admin profile created successfully",newAdmin})
    console.log(newAdmin)

        


    }catch(error){
     res.status(500).json(error.message)
    }
 }

exports.getNewAdmin= async (req,res)=>{
  console.log("hey")
  
  try{
    const admins= await  NewAdminModel.find()
    res.status(200).send({message:"Admins fetched successfully",admins})
    console.log(admins)
  }
  catch(error){
     res.status(500).send(err.message)
     
  }
}


