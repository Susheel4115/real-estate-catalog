const router = require("express").Router();
const User = require("../models/User");

router.get("/login", (req, res) => {
  res.send("You're in login page");
});

router.post("/post", async (req, res) => {
  try {
    const name = { name: req.body.name };
    console.log(req.body);

    console.log(name);
    await User.create(name);

    res.send("post is okay");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
