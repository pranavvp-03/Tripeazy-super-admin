const express = require("express");
const router = express.Router();
const { createRole } = require("../controllers/roleController");
const { verifyToken } = require("../middleware/authMiddleware");

// Create a new role (Super Admin only)
router.post("/create-role", verifyToken, createRole);

module.exports = router;
