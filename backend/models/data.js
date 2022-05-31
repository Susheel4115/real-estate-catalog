const mongoose=require('mongoose');

const dataSchema= new mongoose.Schema({
    length:{
        type:Number,
        required:true
    },
    width:{
        type:Number,
        required:true
    }
},{strict: false});

const Data=new mongoose.model('form',dataSchema);

module.exports=Data;