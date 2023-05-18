const express = require("express")
const emp = require("../models/employee.js")
const bodyParser = require("body-parser")
const jsonParser=bodyParser.json()
const router = express.Router()

router.post("/create",jsonParser,(req,res)=>{
    emp.create(req.body);
    res.status(200).json({
        status:"success",
        message:"emp is added"
    })
})

router.get('/display_all',jsonParser,async (req,res)=>{
    var data=await  emp.find();

    res.status(200).json({
        status:"success",
        data:data
    })
})

router.get('/display_by_name/:name',jsonParser,async (req,res)=>{
    var data=await  emp.find({name:req.params.name});
 
    res.status(200).json({
        status:"success",
        data:data
    })
})

router.delete("/delete/:name", async (req,res)=>{
    emp.deleteOne({name:req.params.name});

    res.status(200).json({
        message:"deleted"
    })
})

module.exports=router;