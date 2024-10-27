const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    specilist:{
        type:String,
        required:true,
    },
    Degree:{
        type:String,
        required:true,
    },
    available:{
        type:String,
        required:true,
    },
    working:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true});

const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = Doctor;