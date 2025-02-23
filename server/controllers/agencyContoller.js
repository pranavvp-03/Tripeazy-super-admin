const agency = require("../model/Agency/AgencyMode")

exports.fetchAgecy = async (req,res)=>{

    console.log("agency data is fetching");

    try{
       const agencyData =  await  agency.find().select("-password")
       res.status(200).send(agencyData)
    //    console.log(agencyData)


    }catch(error){
     res.status(500).send("An Error occured while fetching agencies", error)
     console.error(error)
    }
    

}