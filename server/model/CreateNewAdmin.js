const mongoose= require("mongoose")

const newAdminSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    // fileUrl:{
    //     type:String,
    //     required:true
    // }
},{timestamps:true})

const newAdmin= mongoose.model("newAdmin",newAdminSchema)
module.exports= newAdmin 

