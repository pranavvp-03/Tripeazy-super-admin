const express=require("express")
const {createNewAdmin }= require("../controllers/newAdminController")
const router= express.Router()




router.post("/",createNewAdmin)

module.exports = router