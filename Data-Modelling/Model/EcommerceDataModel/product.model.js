const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        default:0
    },
    cetagory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    productImage:{
        type:String, 
    },
    owner:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"User"
    },
    stock:{
        type:Number,
        default:0
    }

},{timestamps:true});


const Product = mongoose.model('Product',productSchema);

module.exports = Product;