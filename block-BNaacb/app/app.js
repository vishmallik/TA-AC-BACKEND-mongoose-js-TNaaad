const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(app ? app : "connected to database");
});
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000, () => console.log("server listening on port 3000"));
