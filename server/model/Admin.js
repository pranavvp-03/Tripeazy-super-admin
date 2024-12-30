const mongoose = require("mongoose");
const Role = require("./role");  // Import the Role model

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { 
        type: mongoose.Schema.Types.ObjectId,  // Use ObjectId to reference Role model
        ref: "Role", 
        required: true 
    }
});


module.exports = mongoose.model("Admin", adminSchema);
