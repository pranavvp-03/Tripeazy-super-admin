const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  roleName: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  permissions: {
<<<<<<< HEAD
    type: Map,
    of: [String],
    required: true,
  },
=======
    type:Map,
    of:[String],
    required: true,
  }
>>>>>>> 01836ed7c01097e7b90208063747eaea6485ca4d
});

// Use existing model if it exists; otherwise, define it
const Role = mongoose.models.Role || mongoose.model("Role", roleSchema);

module.exports = Role;
