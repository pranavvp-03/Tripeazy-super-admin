const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  permissions: {
    type:Map,
    of:[String],
    required:true,
  },

});

// Use existing model if it exists; otherwise, define it
const Role = mongoose.models.Role || mongoose.model("Role", roleSchema);

module.exports = Role;
