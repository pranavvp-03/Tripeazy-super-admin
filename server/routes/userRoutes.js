const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");
const { checkRole } = require("../middleware/roleMiddleware");

// Create a new user (Super Admin only)
router.post("/create-user", verifyToken, checkRole("super-admin"), createUser);

module.exports = router;
