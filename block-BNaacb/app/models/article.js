const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articleName: String,
  articleType: String,
  articlePublishDate: Date,
  isFactChecked: Boolean,
});
