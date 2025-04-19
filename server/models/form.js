const mongoose = require("mongoose");

const formModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true,
    },
    mobilenumber:{
        type:Number,
        required:true,
        trim:true,
    },
    message:{
        type:String,
        required:true,
        trim:true,
    }
});

module.exports = mongoose.model("Form",formModel);