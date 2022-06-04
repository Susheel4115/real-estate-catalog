const express = require("express");
const router = new express();
const Data = require("../models/Property");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({
      status: "Not logged-in",
      message: "User isn't logged in.!",
    });
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({
        status: "Error",
        message: "Invaild user",
      });
    }
    req.user = user;
    next();
  });
};

router.get("/property", userAuth, async (req, res) => {
  let data = await Data.find({ User: req.user });

  res.json({
    status: "sucess",
    data: await data,
  });
});

router.post("/property", userAuth, async (req, res) => {
  const data = new Data({ ...req.body, User: req.user._id });
  res.json({
    status: "sucess",
    data: await data.save(),
    message: "data added sucessfully",
  });
});

router.get("/search/:PPID", async (req, res) => {
  try {
    const PPID = req.params.PPID;
    const data = await Data.findOne({ PPID: PPID });
    if (!data) {
      return res.json({
        status: "Not found",
        message: "post not found",
      });
    }
    // let data = await Data.findOne(PPID: PPID);
    res.json({
      status: "sucess",
      data: await data,
    });
  } catch (e) {
    res.json({
      status: "err",
      message: e.message,
    });
  }
});

router.put("/property/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Data.findOneAndUpdate(
      { _id: id },
      { $set: { Status: "sold" } }
    );

    res.json({
      status: "sucess",
      data: await data,
      message: "something isnt working",
    });
  } catch (e) {
    res.json({
      status: "err",
      message: e.message,
    });
  }
});

module.exports = router;
