const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: { type: String, required: true, unique: true },  // Name of the role
  description: { type: String, required: true },  // Role description
  permissions: [
    {
      tabName: { 
        type: String, 
        enum: [
          "Dashboard",
          "Users",
          "Packages",
          "Bookings",
          "Agencies",
          "Reports",
          "Settings",
          "Notifications"
        ], 
        required: true 
      },  // Tab name from the 8 available tabs
      permissions: [
        { 
          type: String, 
          enum: ["view", "edit", "delete"], 
          required: true 
        },  // Possible permissions for each tab
      ],
    },
  ],
});

module.exports = mongoose.model("Role", roleSchema);
