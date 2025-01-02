const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  permissions: { 
    type: Map,
    of: [String],
    required: true
  }
});

module.exports = mongoose.model("Role", roleSchema);
