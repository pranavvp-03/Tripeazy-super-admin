const express = require("express")
const router = express.Router()
const { registerSuperAdmin, loginSuperAdmin, createRole, createUser } = require("../controllers/authcontroller")


router.post("/register",registerSuperAdmin);
router.post("/login", loginSuperAdmin);
router.post("/create-role",createRole);
router.post("/create-user",createUser);
router.post("/logout")


module.exports = router