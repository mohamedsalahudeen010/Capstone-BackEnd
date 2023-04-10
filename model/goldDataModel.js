import mongoose from "mongoose"

const goldDataScheme=mongoose.Schema({
   
    date:{
        type:String,
        required:true,
    },
    currency:{
        type:String,
        required:true,
    },
    price24k:{
        type:Number,
        required:true,
    },
    price22k:{
        type:Number,
        required:true,
    },
   
    price21k:{
        type:Number,
        required:true,
    },
    price20k:{
        type:Number,
        required:true,
    },
    price18k:{
        type:Number,
        required:true,
    },
    stockPrice:{
        type:Number,
        required:true,
    },
    time:{
        type:Number,
        required:true,
    },
    prevPrice:{
        type:Number,
        required:true,
    },
    ch:{
        type:Number,
        required:true,
    },
    chp:{
        type:Number,
        required:true,
    },
    metalCode:{
        type:String,
        required:true,
    },
    currencyCode:{
        type:String,
        required:true,
    },
    exchange:{
        type:String,
        required:true,
    },
    
})

const Gold=mongoose.model("data",goldDataScheme)

export {Gold} 