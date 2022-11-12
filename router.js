const express = require("express")
const router = express.Router()
const User = require("./userSchema")

//create
router.post("/create",async(req,res)=>{
    console.log(req.body)
    var data = new User({
        username:req.body.username,
        email:req.body.email,
        country:req.body.country
    })
    await data.save()
    res.json(data)

})


//get all
router.get("/",async(req,res)=>{
    var all = await User.find()
    res.json(all)
})

//update
router.put("/update",async(req,res)=>{
    var update = await User.updateOne({_id:req.body._id},{
        $set:{
            username:req.body.username,
            email:req.body.email,
            country:req.body.country
        }
    })
    res.json(update)
})


//delete
router.delete("/delete/:id",async(req,res)=>{
    console.log(req.params)
    var delData = await User.findByIdAndRemove({_id:req.params.id}).then(()=>{
        res.json("USer deleted")
    })
})

module.exports = router
