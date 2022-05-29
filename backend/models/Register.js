const mongoose = require("mongoose");

const RegisterSchema = {
  email: {
    required: true,
    type: String,
    match: /.+\@.+\..+/,
    lowercase: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
};

module.exports = RegisterSchema;
