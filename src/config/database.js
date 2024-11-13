const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://NikhilMango:jWV14GOMkmJqXcxB@nikhilmango.ybpv5.mongodb.net/devTinder"
  );
};
  module.exports = connectDB;