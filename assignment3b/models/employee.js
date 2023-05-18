const mongoose=require("mongoose")

const empSchema = new mongoose.Schema({
    name:{
        type:String
    },
    pass:{
        type:Number
    }
})

const emp = mongoose.model('emp',empSchema);

module.exports=emp;