const express = require("express");
const { createAdmin,loginAdmin } = require("../controllers/authController");
const router = express.Router()
// const { createAdmin, loginAdmin } = require("../controllers/authcontroller")
// const  {loginAdmin} =require ("../controllers/authController")


router.post("/register",createAdmin);
router.post("/login", loginAdmin);
router.post("/logout")


module.exports = router