const express = require("express");
const router = express.Router();
const { createRole, getRole } = require("../controllers/roleController");
const { verifyToken, authorize } = require("../middleware/authMiddleware");

// Create a new role (Super Admin only)
router.post("/create-role",verifyToken,createRole);
router.get("/get-role",verifyToken,getRole)

module.exports = router;
