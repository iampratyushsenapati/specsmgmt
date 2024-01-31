const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
   hotel_name :{
    type:String,
    required :true
   },
    customer_name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
//     time:{
//         type:Time,
//         default:Time.now
//     }
})
module.exports = Hotel = mongoose.model('hotel',HotelSchema);