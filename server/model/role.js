const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  permissions: [
    {
      tabName: {
        type: String,
        enum: [
          "Home",
          "Agencies",
          "Users",
          "Packages",
          "Blogs",
          "CreateAdmin",
          "Advertisements",
          "Notifications",
          "Profile"
        ],
        required: true
      },
      actions: [
        {
          type: String,
          enum: ["view", "edit", "delete"], // Define what actions are allowed on the tab
          required: true
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Role", roleSchema);
