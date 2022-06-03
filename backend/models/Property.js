const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  // PPID: {
   
  //   type: String,
  //   unique: true,
  // },
  
  // Property: {
  //   required: true,
  //   type: String,
  // },
  // Contact: {
  //   required: true,
  //   type: Number,
  // },
  // Area: {
  //   required: true,
  //   type: Number,
  // },
  
  
  
},{strict: false});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
