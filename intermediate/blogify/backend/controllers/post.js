const Post = require("../model/post");

const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const post = await Post.create({
      title,
      content,
      author,
    });
    return res.status(201).json({ post });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
        author,
      },
      { new: true }
    );
    return res.status(200).json({ updatedPost });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post Deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
