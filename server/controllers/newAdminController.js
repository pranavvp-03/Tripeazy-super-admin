const express= require("express")
const newAdmin = require("../model/CreateNewAdmin")

 exports.createNewAdmin = async (req,res)=>{
   console.log("hy iam ")
   //  file= req.file
    const {name,password,email,phoneNumber,gender,role}=req.body
    console.log(name)
    try{
     const createNewAdmin = new newAdmin({
      name,
      password,
      email,
      phoneNumber,
      gender,
      role,
      // file
     })
     await  createNewAdmin.save()
    res.status(200).send({message:"Admin profile created successfully",createNewAdmin})
    console.log(createNewAdmin)

        


    }catch(error){
     res.status(500).json({error:error.message})
    }
 }




