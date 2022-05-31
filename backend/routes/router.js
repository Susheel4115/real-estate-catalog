const router = require("express").Router();
const User = require("../models/User");
const userLogin = require("../controllers/userLogin");
// const user

router.get("/login", userLogin, (req, res) => {
  res.send("You're in login page");
  res.json({
    status: "sucess",
    data: req.body,
  });
});

router.post("/Signup", async (req, res) => {
  const name   = req.body.email.substring(0, req.body.email.lastIndexOf("@"));
  const userid = req.body
  console.log(userid);
  const data = new User({
    ...req.body,
    UserName : name,
    UserID : userid
  });
  
  try {
    const dataToSave = await data.save();
    console.log( name );
    console.log(data);
    res.status(200).json({
      status: "Sucess",
      user: [dataToSave],
    });
  } catch (error) {
    res.status(400).json({
      staus: "error",
      message: "user is already register",
      });
  }
});

// router.post("/login", userLogin);

// router.post("/property", userProperty);

module.exports = router;
