const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/app", (err) =>
  console.log(err ? err : "Connected to Database")
);

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Mongoose");
});

app.listen(5000, () => console.log(`server listening on port 5000`));
