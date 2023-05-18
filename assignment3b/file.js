var fs = require('fs');

fs.readFile('file1.txt',(err,data)=>{
    if (err){
        console.log(err)
    } 
    else {
        console.log(data.toString())
    }
})

fs.appendFile('file2.txt','\nhello world i love python it is the best!',(err)=>{
    if (err){
        console.log(err)
    } 
   
})

fs.writeFile('file6.txt','welcome to the world of computing',(err)=>{
    if (err){
        console.log(err)
    }
})

fs.rename('file3.txt','file4.txt',(err)=>{
    if (err){
        console.log(err)
    }
})

fs.unlink('file5.txt',(err)=>{
    if (err){
        console.log(err)
    }
})