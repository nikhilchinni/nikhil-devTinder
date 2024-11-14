const express = require("express");

const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");
const { validateSignUp } = require("./utils/validations.js");
const bcrypt = require("bcrypt");

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    // Validation of data
    validateSignUpData(req);
    const { firstName, lastName, emailId, password } = req.body;
    // Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    //   Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    console.log(err);
    res.status(400).send("ERROR : " + err.message);
  }
});

// API- Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    console.log(userEmail);
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
    // const user = await User.find({ emailId: userEmail });
    // if (user.length === 0) {
    //   res.status(404).send("User not found");
    // } else {
    //   res.send(user);
    // }
  } catch {
    res.status(400).send("Something went wrong");
  }
});

// API - Feed API - GET /feed - get all the users from the database

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    res.status(400).send("Something went wrong");
  }
});

// Detele a user from the database

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    console.log(user);
    //const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch {
    res.status(400).send("Something went wrong");
  }
});

// Update data of the user

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data?.skills.length > 10) {
      throw new Error("Skills cannot be more than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
  } catch (err) {
    res.status(400).send("UPDATE FAILED:" + err.message);
  }
});
connectDB()
  .then(() => {
    console.log("Database Connection established............");
    app.listen(3000, () => {
      console.log("Server is successfully listening at port 3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected............");
  });
