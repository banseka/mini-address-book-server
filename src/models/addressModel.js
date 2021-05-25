const mongoose = require("mongoose");


const addressSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength:3,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      required: true,
    },
    skype: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
  }
);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
