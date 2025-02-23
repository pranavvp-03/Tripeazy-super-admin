const express =require("express")
const {fetchAgecy} =require("../controllers/agencyContoller")

const router=express.Router()

router.get("/fetchAgency",fetchAgecy)
console.log("Agency page")

module.exports = router