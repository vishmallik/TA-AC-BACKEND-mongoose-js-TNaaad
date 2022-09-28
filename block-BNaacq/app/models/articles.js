const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    tags: [String],
    likes: { type: Number, default: 0 },
    author: Schema.Types.ObjectId,
    comments: { type: String, trim: true },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
