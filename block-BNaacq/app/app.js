const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/articles.js");
const User = require("./models/user.js");
const Comment = require("./models/comments.js");

mongoose.connect("mongodb://localhost/sample", (err) =>
  console.log(err ? err : "connected to database")
);

const app = express();

app.get("/", (req, res) => res.send("Welcome"));

app.listen(4000, () => console.log("Server listening on port 4k"));
