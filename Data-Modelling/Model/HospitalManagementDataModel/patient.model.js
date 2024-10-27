const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    DiagnosType:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    bloodgroup:{
        type:String,
        enum:["A+","B+","AB+","A-","B-","AB-","O+","O-"],
        default:"O+",
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        enum:["MALE","FEMALE","OTHER"],
        required:true
    }
},{timestamps:true});

const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;