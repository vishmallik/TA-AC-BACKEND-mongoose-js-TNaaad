const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect("mongodb://localhost/sample", (err) =>
  console.log(err ? err : "connected to database")
);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/users", (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) {
      next(err);
    } else {
      res.send(user);
    }
  });
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  User.find({ name: `M S Dhoni` }, (err, user) => {
    if (err) {
      next(err);
    } else {
      res.json({ Users: user });
    }
  });
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
  User.findById(id, (err, user) => {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
});
//User.find always returns the array of all users that matches the query while User.findOne and User.findById returns the object of only one user that matches the query findOne return the first document that matches the query.

app.put("/users/:id", (req, res) => {
  User.updateMany(
    { sports: "soccer" },
    { sports: "football" },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        next(err);
      } else {
        res.json(updatedUser);
      }
    }
  );
  User.updateOne(
    { _id: req.params.id },
    { name: "Sachin" },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        next(err);
      } else {
        res.json(updatedUser);
      }
    }
  );
  User.findByIdAndUpdate(
    id,
    { name: "Gawaskar" },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        next(err);
      } else {
        res.json(updatedUser);
      }
    }
  );
});

app.delete("/users/:id", (req, res) => {
  var userId = req.params.id;
  User.findByIdAndDelete(id, (err, user) => {
    if (err) return next(err);
    res.send("user deleted");
  });
});
//error handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
app.use((err, req, res) => {
  res.status(500).send(err);
});
app.listen(4000, () => console.log("server listening on port 4000"));
