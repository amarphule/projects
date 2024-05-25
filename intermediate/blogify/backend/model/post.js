const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = new model("post", postSchema);

module.exports = Post;
