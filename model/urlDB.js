const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
    {
        shortenUrl:{
            type:String,
            required:true
        },
        trueUrl:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now()
        },
        useTimes:{
            type:Number,
            default:0
        }
        
    }
)

module.exports = mongoose.model("Url",urlSchema);