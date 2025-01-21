// // const express= require("express")
// // const NewAdminModel  = require("../model/CreateNewAdmin")
// const Admin =require("../model/Admin")
// const Role =require("../model/role")
// const bcrypt = require("bcrypt")
//  exports.createNewAdmin = async (req,res)=>{
   
//    //  file= req.file
//     const {name,password,email,phoneNumber,gender,position}=req.body
//     console.log(name,password,email,phoneNumber,gender,position)
    
    
//    if(!name ||!email || !password || !phoneNumber || !gender  || !position){
//     return  res.status(400).json({message:"all Fields are required"})
//    }


//     try{


//       const role=   await Role.findOne({roleName:position})
//     if(!role){
//       return res.status(400).json({message:"Role not found"})
//     }

//     const existingEmail= await Admin.findOne({email})
    
//     if(existingEmail){
//       return res.status(400).json({message:"Email Adress is already in use "})

//     }

//     const hashedPassword= await bcrypt.hash(password,10)

//     const newAdmin =  new Admin ({
//       name,
//       password:hashedPassword,
//       email,
//       phoneNumber,
//       gender,
//       role: role._id
//       // file
//      })
     
//      await  newAdmin.save()
//     res.status(200).json({message:"Admin profile created successfully",newAdmin})
//     console.log(newAdmin)

        


//     }catch(error){
//      res.status(500).json(error.message)
//     }
//  }

// exports.getNewAdmin= async (req,res)=>{
//   console.log("hey")
  
//   try{
//     const admins= await  NewAdminModel.find()
//     res.status(200).send({message:"Admins fetched successfully",admins})
//     console.log(admins)
//   }
//   catch(error){
//      res.status(500).send(err.message)
     
//   }
// }


