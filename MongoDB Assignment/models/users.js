const mongoose = require("mongoose");
const shortid =require("shortid")

//Define a Schema
const Schema = mongoose.Schema;

// Define the user Schema
const userSchema = new Schema({
  user_id: {
    type: String,
    default:shortid.generate,
    required: true,
  },
  username: {
    type: String,
    required: true,
    max: [15, "username must not exceed 15 characters"], // Validation with custom message
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  phonenumber: {
    type: String,
  },
  createdAt:{
    type:Date,
    default: new Date()
  },
  role:{
    type:String,
    enum:['User','Admin'],
    default:'User'
  }
});

module.exports = mongoose.model("Users", userSchema);

