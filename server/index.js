const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const authRouter = require("./routes/auth")

dotenv.config()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api",authRouter)
 
mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log(`mongodb connected successfully...😎}`))
.catch((error)=>console.log("mongodb connection error",error))


const PORT = process.env.PORT || 3001
app.listen((PORT),()=>console.log(`server is running on port ${PORT}`))