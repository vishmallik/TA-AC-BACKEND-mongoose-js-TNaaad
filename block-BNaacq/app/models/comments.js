const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: { type: String, trim: true },
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
