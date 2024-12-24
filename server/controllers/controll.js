const express = require("express")
const Admin = require("../model/admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"

 exports.registerSuperAdmin =async(req,res)=>{
    const {name,email,password} = req.body
    try {
        console.log(name,email,password)
       const existingAdmin = await Admin.findOne({role: "super-admin"}) 
       if(existingAdmin){
        return res.status(400).json({message: "super admin already"})
       }

       const hashedPassword = await bcrypt.hash(password, 10)

       const superAdmin = new Admin({
        name,
        email,
        password: hashedPassword,
        role: "super-admin"
       })
       
       await superAdmin.save()
       res.status(201).json({message: "super admin registered succesfully"})
    } catch (error) {
        res.status(500).json({message: "registration failed", error: error.message})
        
    }
 }

 exports.loginSuperAdmin = async(req,res)=>{
    const {email,password} = req.body
    try{
        const superAdmin = await Admin.findOne({role: "super-admin"})
        if(!superAdmin){
            return res.status(404).json({message: "super admin not found"})
        }

        if(superAdmin.email !== email){
            return res.status(401).json({message: "email not matched"})
        }

        const isPasswordValid = await bcrypt.compare(password, superAdmin.password)
        if(!isPasswordValid){
            return res.status(401).json({message: "password do not matched"})
        }

        const token = jwt.sign(
            {id: superAdmin._id, role: superAdmin.role},
            JWT_SECRET,
            {expiresIn: "1h"}); 

            res.status(200).json({message: "login successful", token , role: superAdmin.role})
            console.log(token)
    }
    catch(error){
        console.log(error,"error during login")
        res.status(500).json({message: "login failed. please try again later",})
    }

 } 