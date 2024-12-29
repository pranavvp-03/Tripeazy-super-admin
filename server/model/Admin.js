const mongoose = require("mongoose");

// Admin Schema
const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role', // References the Role model 
        required: true, 
        default: 'superAdmin' // Default role for the first user
    }
});

module.exports = mongoose.model("Admin", adminSchema);
