const express = require("express");
const routes = require("./routes/router");
require("dotenv").config();
const connectDB = require("./connection/connect");
const app = express();
connectDB();
const port = process.env.PORT || 5002;

app.listen(port, () => {
  console.log(`server started and running on port - ${port}`);
});

app.use("/", routes);
