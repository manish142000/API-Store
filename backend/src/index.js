const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB Server");
  })
  .catch((err) => {
    console.log("The error while connecting to MonoDB is: ", err);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(process.env.PORT, () => {
  console.log("The Backend server has started on PORT: " + process.env.PORT);
});
