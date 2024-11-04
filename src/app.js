const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Root Path");
})

app.use("/hello",(req,res)=>{
    res.send("Hello from server");
})

app.use("/test",(req,res)=>{
    res.send("This is a test link");
})

app.listen(3000, () => {
  console.log("Server is successfully listening at port 3000");
});
