 import newAdmin from "../model/CreateNewAdmin"

 export const createNewAdmin= async (req,res)=>{
    file= req.file
    const {name,password,email,phoneNumber,gender,role}=req.body
    try{
     const newAdmin= new newAdmin({
      name,
      password,
      email,
      phoneNumber,
      gender,
      role,
      file
     })
     await  newAdmin.save()
    res.status(200).json({message:"Admin profile created successfully",newAdmin})
        


    }catch(error){
     res.status(500).json({error:error.message})
    }
 }




