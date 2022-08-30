const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/ThreeJS",(err,resolve)=>{
    if(!err){
        console.log("mongoDB is connected sucessfully");

    }else{
        console.log("error in connection with MongoDB");
    }
  
})
