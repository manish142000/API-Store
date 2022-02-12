const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "afbqwbfb@#@$%@wfqbf%^&%*&*(jbdqbwidnh1209741902u2e1";

app.use(express.json());
app.use(cors());

const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGODB_URL;

console.log(url);

const UserModel = require("./models");

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

app.get("/login", (req, res) => {
  res.send("Hello login!");
});

app.post("/login", async (req, res) => {
  const data = req.body;

  console.log(data);

  //signup post request
  if (data.is_signup) {
    const username = data.username;
    const email_id = data.email_id;
    const password = data.password;
    const confirm_password = data.confirm_password;

    //console.log(await bcrypt.hash(password, 10));
    const hashed_password = await bcrypt.hash(password, 10);

    if (!username) {
      return res.json({ status: "error", error: "Invalid username" });
    }

    if (!email_id) {
      return res.json({ status: "error", error: "Invalid email_id" });
    }

    if (!password) {
      return res.json({ status: "error", error: "Invalid password" });
    }

    if (!confirm_password) {
      return res.json({ status: "error", error: "Invalid confirm_password" });
    }

    if (password != confirm_password) {
      res.json({ msg: "Passwords do not match!" });
    } else {
      const user = await new UserModel({
        username: username,
        email_id: email_id,
        password: hashed_password,
      });

      try {
        console.log(user);
        await user.save();
      } catch (err) {
        if (err.code === 11000) {
          return res.json({
            status: "error",
            error: "Username already in use",
          });
        }
        throw err;
      }
    }
  }

  //login post request
  if (data.is_login) {
    const password = data.password;
    const email_id = data.email_id;

    console.log(email_id);
    console.log(password);

    if (!email_id) {
      return res.json({ status: "error", error: "Invalid email_id" });
    }

    if (!password) {
      return res.json({ status: "error", error: "Invalid password" });
    }

    const user = await UserModel.findOne({
      email_id: email_id,
    }).lean();

    console.log(user.username);

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          username: user.username,
        },
        JWT_SECRET,
      );

      return res.json({ status: "ok", data: token });
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log("The Backend server has started on PORT: " + process.env.PORT);
});

/*
{
  username: 'manish',
  email_id: 'bawkarmanish14@gmail.com',
  password: 'manish67',
  confirm_password: 'manish67'
}
*/
