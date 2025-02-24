const agency = require("../model/Agency/AgencyMode")


exports.fetchAgecy = async (req,res)=>{

    // console.log("agency data is fetching");

    try{
       const agencyData =  await  agency.find({}).select("-password")
       res.status(200).send(agencyData)
    //    console.log(agencyData)


    }catch(error){
     res.status(500).send( error)
     console.error(error)
    }
    

}

exports.updateAgencyStatus= async (req,res)=>{
        console.log(req.body)
         const {id}=req.params
         const{status}=req.body
         console.log(id)
         console.log(status)

         

         try{
            console.log("Agency status is updating")
          const response=  await agency.findByIdAndUpdate(id,{status},{new:true})
          

          res.status(200).json({
            message: "Agency status updated successfully",
            data: response
        });
         }
         catch(error){
           res.status(500).json({ message:"internal server error occured while updating Agency status",error})
           console.error(error)
         }

}