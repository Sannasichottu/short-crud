const mongoose = require("mongoose")

//schema creation
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
})
//model creation
module.exports = mongoose.model("Student_Data",UserSchema)