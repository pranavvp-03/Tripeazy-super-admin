const express=require("express")
const {getNewAdmin, updateRole }= require("../controllers/newAdminController")
const router= express.Router()




// router.post("/",createNewAdmin)
router.get("/getAdmin",getNewAdmin)
router.put("/updateRole/:id",updateRole);  // New route for updating role

module.exports = router