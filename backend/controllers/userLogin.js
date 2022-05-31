const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("body is" ,req.body);
    // var findQueryinDB= false;
    const findQueryinDB = await User.findOne({ email: req.body.email });
    console.log("id" ,findQueryinDB);
    if(!findQueryinDB){
      console.log('user not found')
    }
    console.log('check it')
    if (findQueryinDB) {
      console.log('find')
      passwordValidation(
        password,
        findQueryinDB.password,
        res,
        email,
        findQueryinDB.id
      );
    } else {
      return res.json({
        status: "not registerd",
        message: "user isn't register",
      
    });
      
  }} catch (error) {
    res.json({
      status:"invalid user",
      message:error
    })
    
  }
};

const passwordValidation = (passwordEnteredByUser, hash, res, email, id) => {
  console.log(hash);
  bcrypt.compare(passwordEnteredByUser, hash, function (error, isMatch) {
    console.log(passwordEnteredByUser, hash, isMatch);
    if (error) {
      res.status(400).json({error:error});
    } else if (!isMatch) {
      res.status(400).json({
        status:"password mismatch"
      }
       );
    } else {
      console.log("In else part");
      // const id = new Date().getDate();
      const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.status(200).json({
        status: "Success",
        token: token,
      });
    }
  });
};


module.exports = userLogin;
