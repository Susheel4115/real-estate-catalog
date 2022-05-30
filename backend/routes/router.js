const router = require("express").Router();
const User = require("../models/User");
const userLogin = require("../controllers/userLogin");

router.get("/login",userLogin, (req, res) => {
  res.send("You're in login page");
  res.json({
    status:"sucess",
    data:req.body
  })
});

router.post("/post", async (req, res) => {
  const data = new User({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const dataToSave = await data.save();
    // user.push(dataToSave);
    res.status(200).json({
      status: "Sucess",
      user: [dataToSave],
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// router.post("/login", userLogin);



module.exports = router;
