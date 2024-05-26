import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // creation of post
      await axios.post("http://localhost:3000/api/posts", {
        title,
        content,
        author,
      });

      //   update created post and get on page
      dispatch(fetchPosts());
      setTitle("");
      setContent("");
      setAuthor("");
    } catch (error) {
      console.error(`Error creating post: ${error}`);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-md mx-auto p-4 shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full border rounded-md mt-1 p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          id="content"
          className="block w-full border mt-1 p-2 rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="author"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          className="block w-full border rounded-md mt-1 p-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-600 py-2 px-4 rounded text-white w-1/2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default PostForm;
