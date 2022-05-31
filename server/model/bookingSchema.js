const mongoose = require("mongoose");

const bookingSchema =new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,

  },
  email: {
    type: String,
    required: [true, "Please Enter product Description"],
  },

  phone:{
      type:String
  },
  creditCard: {
    type: String,
    // required: [true, "Please Enter product Price"],
    // maxLength: [16, "Price cannot exceed 8 characters"],
  },
  rooms:{
      type:String
  },



//   selectfile : String,
//   ratings: {
//     type: Number,
//     default: 0,
//   },
//   images: [
//     {
//       public_id: {
//         type: String,
//         required: true,
//       },
//       url: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
  days:{
    type: String,
   
  },
//   

// // 
});

module.exports = mongoose.model("booking",bookingSchema );
