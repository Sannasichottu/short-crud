const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require("./router")



//body_parser
app.use(express.json())
//router
app.use("/student",router)

//momgoose connection
mongoose.connect("mongodb+srv://Akash:Akash@cluster0.knisous.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("im connected to database")
    }
    else{
        console.log(err)
    }
})



app.listen(5000,(req,res)=>{
    console.log("im listeneing to port 5000")
})