const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstName:"Chinni",lastName:"Nikhil"});
})

app.post("/user",(req,res)=>{
    res.send("Data successfully saved to db");
})

app.delete("/user",(req,res)=>{
    res.send("Data deleted from database");
})


// This app.use will macth all HTTP API method calls 
// app.use("/hello/2", (req, res) => {
//   res.send("Hello from server 2");
// });

// app.use("/hello", (req, res) => {
//   res.send("Hello from server");
// });

// app.use("/test", (req, res) => {
//   res.send("This is a test link");
// });

// app.use("/", (req, res) => {
//   res.send("Root Path");
// });

app.listen(3000, () => {
  console.log("Server is successfully listening at port 3000");
});
