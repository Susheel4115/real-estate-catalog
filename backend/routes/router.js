const router = require("express").Router();
const User = require("../models/User");
const userLogin = require("../controllers/userLogin");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const user

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      status: "Not registerd",
      message: "User isn't register",
    });
  }
  const isValid = await bcrypt.compare(req.body.password, user.password);

  if (!isValid) {
    return res.status(400).json({
      status: "Not authorize",
      message: "Password is wrong",
    });
  }

  var token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

  res.json({
    status: "sucess",
    token: token,
    UserID: user.UserID,
    UserName: user.UserName,
  });
});

router.post("/Signup", async (req, res) => {
  // const data = new User({
  //   ...req.body,
  //   UserName : name,
  //   UserID : UserID
  // });

  try {
    const name = req.body.email.substring(0, req.body.email.lastIndexOf("@"));
    const UserID = req.body.UserID;
    const hashPass = await bcrypt.hash(req.body.password, 10);

    const data = new User({
      ...req.body,
      password: hashPass,
      UserName: name,
      UserID: UserID,
    });

    res.status(200).json({
      status: "sucess",
      data: await data.save(),
    });
  } catch (e) {
    res.status(400).json({
      status: "error",
      message: "user is already register",
    });
  }

  // try {
  //   const dataToSave = await data.save();
  //   console.log( name );
  //   console.log(data);
  //   res.status(200).json({
  //     status: "Sucess",
  //     user: [dataToSave],
  //   });
  // } catch (error) {
  //   res.status(400).json({
  //     staus: "error",
  //     message: "user is already register",
  //     });

  // }
});

// router.post("/login", userLogin);

// router.post("/property", userProperty);

module.exports = router;
