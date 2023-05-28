
const mongoose = require('mongoose');
const express = require("express")
const app = express();


mongoose.connect('mongodb+srv://rohitpal7418:kbtug%4020261@cluster0.9gijj66.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));
  
app.use('/emp',require("./controllers/emp.js"))

app.listen(8080,()=>{
    console.log("running on port 8080")
})