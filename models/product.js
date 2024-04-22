const mongoose =require("mongoose");



const productSchema = new mongoose.Schema({
    name:{
        type:String,
        requied:[true, "must provide name!"],
        trim:true,
        maxLength:50
    },
    price:{
        type:Number,
        requied:[true,'must provide price!']
    },
    isFeatured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy','caressa','marcos'],
            message:`{VALUE} not supported!`
        }
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})


module.exports = mongoose.model("Product", productSchema)