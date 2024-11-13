const express = require("express");

const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send("Data added successfully");
  } catch (err) {
    res.status(400).send("Error Saving the User" + err.message);
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

app.get("/feed",async (req,res)=>{
    try{
      const users = await User.find({});
      res.send(users);
    }
    catch{
      res.status(400).send("Something went wrong");
    }
})

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
