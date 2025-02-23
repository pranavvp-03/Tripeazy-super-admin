const express =require("express")
const {fetchAgecy,updateAgencyStatus} =require("../controllers/agencyContoller")

const router=express.Router()

router.get("/fetchAgency",fetchAgecy)
router.put("/updateStatus/:id", updateAgencyStatus);

// console.log("agency updating")


module.exports = router