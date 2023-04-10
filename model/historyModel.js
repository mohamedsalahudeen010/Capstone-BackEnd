import mongoose from "mongoose"

const historyScheme=mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
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
    stackPrice:{
        type:Number,
        required:true,
    }

})

const History=mongoose.model("history",historyScheme)

export {History} 