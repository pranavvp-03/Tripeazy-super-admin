const express=require("express")
const {getNewAdmin }= require("../controllers/newAdminController")
const router= express.Router()




// router.post("/",createNewAdmin)
router.get("/getAdmin",getNewAdmin)

module.exports = router