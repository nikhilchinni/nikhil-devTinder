const express = require("express");

const app = express();

// This will only handle GET call to /user
// "/ab+c" ------> here b can come anynumber of times (Eg : abbbc,abc,abbbbbbc,abbbbbbbbbbbc)
// "/ab?c" ------> here b is optional (Eg : abc, ac)
// "/ab*c" ------> here we can write anything between b and c it will work (Eg : abNikhilc, absdfsdc, abramc,abc)
// "/a(bc)+d" ----> here we can get bc any number of times (Eg : abcd, abcbcd)
// Note : Similary we can do the above grouping for * and ? also .
// so this regex /a/ denotes that will work for if any of the word contains a it will work (Eg : a, ram, krishna, aaa, abc)
// /.*fly$/ So this regex denotes that anything before fly can be there and at the end fly should be there (Eg : fly, butterfly, dragonfly)
// http://localhost:3000/test?name=nikhil&age=28  We can read this query using req.query (Output will be request query { name: 'nikhil', age: '28' })
// app.get("/test",(req,res)=>{
//     console.log("request params", req.query);
//     res.send({firstName:"Chinni",lastName:"Nikhil"});
// })
// http://localhost:3000/test/897  We can read the dynamic routes using req.params (Output will be dynamic req params { id: '897' })
// app.get("/test/:id",(req,res)=>{
//     console.log("request params", req.params);
//     res.send({firstName:"Chinni",lastName:"Nikhil"});
// })




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
