const express = require("express")
const router = express.Router()
const { registerSuperAdmin, loginSuperAdmin } = require("../controllers/controll")


router.post("/register",registerSuperAdmin)
router.post("/login", loginSuperAdmin)
router.post("/logout",)

module.exports = router