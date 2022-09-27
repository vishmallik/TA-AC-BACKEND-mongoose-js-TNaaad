const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) => {
  console.log(err ? err : "Connected to Database");
});
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
