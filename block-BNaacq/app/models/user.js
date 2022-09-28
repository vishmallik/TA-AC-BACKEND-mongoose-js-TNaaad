const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, match: /@/ },
  age: { type: Number, default: 0 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
