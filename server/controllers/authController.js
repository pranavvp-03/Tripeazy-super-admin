const express = require("express")
const Admin = require("../model/Admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Role = require("../model/Role")
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key"

// Register Super Admin
exports.createAdmin = async (req, res) => {
    const { name, email, password, roleName } = req.body;

    try {
        console.log(name, email, roleName);

        // Fetch the role by roleName
        const role = await Role.findOne({ roleName });
        if (!role) {
            return res.status(404).json({ message: `Role '${roleName}' not found` });
        }

        // Check if an admin with the same email already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin with this email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new admin
        const admin = new Admin({
            name,
            email,
            password: hashedPassword,
            role: role._id, // Save role as ObjectId
        });

        await admin.save();
        res.status(201).json({ message: "Admin created successfully", admin });
    } catch (error) {
        res.status(500).json({ message: "Admin creation failed", error: error.message });
    }
};

// Login Super Admin
exports.loginAdmin = async (req,res)=>{
    const {email,password} = req.body;
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
            role: admin.role.roleName,
            permissions: admin.role.permissions,})
            console.log(admin.role.roleName,"role");
    } catch (error) {
        console.log(error,"error in login admin");
        res.status(500).json({message:"Login failed please try again later."})
    }
}