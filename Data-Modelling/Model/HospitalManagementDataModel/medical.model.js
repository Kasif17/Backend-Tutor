const mongoose = require('mongoose');

const medicalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
},{timestamps:true});

const Medical = mongoose.model('Medical',medicalSchema);

module.exports = Medical;