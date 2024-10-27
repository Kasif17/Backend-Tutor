const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    specilist:{
        type:String,
        required:true,
    },
    bed:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Hospital = mongoose.model('Hospital',hospitalSchema);

module.exports = Hospital;