const express = require("express");
const { createAdmin,loginAdmin, markAsRead, getContactRequests } = require("../controllers/authController");
const router = express.Router()
// const { createAdmin, loginAdmin } = require("../controllers/authcontroller")
// const  {loginAdmin} =require ("../controllers/authController")


router.post("/register",createAdmin);
router.post("/login", loginAdmin);
router.post("/logout")
router.get("/contact-requests",getContactRequests);
router.put("/contact-requests/:id/mark-as-read", markAsRead);


module.exports = router