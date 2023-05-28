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

router.put('/update/:id', jsonParser, async (req, res) => {
    const employeeId = (req.params.id);
    const { name } = req.body;
  
    try {
        const employee = await emp.findByIdAndUpdate(employeeId, { name }, { new: true });
    
        if (!employee) {
          return res.status(404).json({ error: 'Employee not found.' });
        }
    
        res.json({ message: 'Employee updated successfully.', employee });
    } 
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'An error occurred while updating the employee.' });
      }
  });

  router.delete('/delete/:id', async (req, res) => {
    const employeeId = req.params.id;
  
    try {
      const employee = await emp.findByIdAndRemove(employeeId);
  
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found.' });
      }
  
      res.json({ message: 'Employee deleted successfully.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'An error occurred while deleting the employee.' });
    }
  });
  
module.exports=router;