const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");
const Role = require("../model/Role");

// Create User
exports.createUser = async (req, res) => {
    const { name, email, password, roleName } = req.body;
    try {
        const role = await Role.findOne({ roleName });
        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Admin({
            name,
            email,
            password: hashedPassword,
            role: role._id
        });

        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: {
                    _id: role._id,
                    roleName: role.roleName,
                    description: role.description,
                    permissions: role.permissions
                }
            }
        });
    } catch (error) {
        console.log("Error creating user", error);
        res.status(400).json({ message: "Failed to create user", error: error.message });
    }
};
