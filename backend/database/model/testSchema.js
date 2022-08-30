const mongoose = require("mongoose")
const Schema = mongoose.Schema


const testSchema= new Schema({
    spotLightColor:{
        type:String, 
    },
    crateOffset:{
        type:Number,    
    },
    floorWidth:{
        type:Number,
       
    },
    floorHeight:{
        type:Number,
        default: false
    },
    wireframe:{
        type:Boolean,
        default: true
    },
    cameraMoveSpeed:{
        type:String,
        default: false
    },
   
    planets:{
        type:String,
        trim:true,
    },


    
    


})

const Params = new mongoose.model("control",testSchema)
module.exports =Params