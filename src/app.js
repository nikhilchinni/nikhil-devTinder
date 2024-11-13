const express = require("express");

const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Chisdfsfnni",
    lastName: "sdf",
    emailId: "df@dev.com",
    password: "ssdfsfdfsdf",
  });
  try {
    await user.save();
    res.send("Data added successfully");
  } catch (err) {
    res.status(400).send("Error Saving the User" + err.message);
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
