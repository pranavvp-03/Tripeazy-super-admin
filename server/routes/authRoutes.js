const express = require("express")
const router = express.Router()
const { createAdmin, loginAdmin } = require("../controllers/authcontroller")


router.post("/register",createAdmin);
router.post("/login", loginAdmin);
router.post("/logout")


module.exports = router