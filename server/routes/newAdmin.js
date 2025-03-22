const express=require("express")
const {getNewAdmin, updateRole,updateAdminStatus }= require("../controllers/newAdminController")
const router= express.Router()




// router.post("/",createNewAdmin)
router.get("/getAdmin",getNewAdmin)
router.put("/updateRole/:id",updateRole); 
router.put("/suspendAdmin/:id",updateAdminStatus); 


module.exports = router
