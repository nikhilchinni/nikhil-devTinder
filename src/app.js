const express = require("express");

const app = express();

// rH --> denotes route handlers and we can have as many as route handlers 
//app.use("/route", rH, [rH2, rH3], rH4, rh5);
app.get(
    "/user",
    (req, res, next) => {
      console.log("Handling the route user!!");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 2!!");
      // res.send("2nd Response!!");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 3!!");
      // res.send("3rd Response!!");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 4!!");
      // res.send("4th Response!!");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 5!!");
      res.send("5th Response!!");
    }
  );

app.listen(3000, () => {
  console.log("Server is successfully listening at port 3000");
});
