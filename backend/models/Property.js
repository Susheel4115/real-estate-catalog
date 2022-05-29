const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  PPID: {
    required: true,
    type: String,
    unique: true,
  },
  Image: {
    required: true,
    type: String,
  },
  Property: {
    required: true,
    type: String,
  },
  Contact: {
    required: true,
    type: Number,
  },
  Area: {
    required: true,
    type: Number,
  },
  Views: {
    required: true,
    type: Number,
  },
  Status: {
    required: true,
    type: String,
  },
  Duration: {
    required: true,
    type: Number,
  },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
