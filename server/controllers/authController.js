const express = require("express")
const Admin = require("../model/Admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Role = require("../model/role")
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"


exports.createAdmin = async (req, res) => {
    // const { name, email, password, roleName } = req.body; 
    //   file= req.file
    const {name,password,email,phoneNumber,gender,position}=req.body
    // console.log(name,password,email,phoneNumber,gender,position)
    console.log(position);
    
    

    try {
        

        // Fetch the role by roleName
        const role = await Role.findOne({ roleName:position });
        console.log(role)
        if (!role) {
            return res.status(404).json({ message: `Role '${roleName}' not found` });
        }

        // Check if an admin with the same email already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin with this email already exists" });
        }

       
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new admin
        // const admin = new Admin({
        //     name,
        //     email,
        //     password: hashedPassword,
        //     role: role._id, // Save role as ObjectId
        // });
        const admin =  new Admin ({
                  name,
                  password:hashedPassword,
                  email,
                  phoneNumber,
                  gender,
                  role: role._id
                  // file
                 })

        await admin.save();
        res.status(201).json({ message: "Admin created successfully", admin });
    } catch (error) {
        res.status(500).json({ message: "Admin creation failed", error: error.message });
    }
};

// Login Super Admin
exports.loginAdmin = async (req,res)=>{
    const {email,password} = req.body;
    console.log(password,email);
    
    try {
        const admin = await Admin.findOne({email}).populate("role");
        console.log(admin,"admin");
        if(!admin){
            return res.status(404).json({message:"Admin not found"})
        }

        const isPasswordValid = await bcrypt.compare(password,admin.password);
        if(!isPasswordValid){
            return res.status(401).json({message: "invalid credentials"})
        }

        const token = jwt.sign(
            {id:admin._id, role:admin.role.roleName},
            JWT_SECRET,
            {expiresIn:"1h"}
        )

        res.status(200).json({message:"Login successful",token,
            role: admin.role,
            permissions: admin.role.permissions,})
            console.log(admin.role.roleName,"role");
    } catch (error) {
        console.log(error,"error in login admin");
        res.status(500).json({message:"Login failed please try again later."})
    }
}