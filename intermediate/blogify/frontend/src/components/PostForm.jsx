const PostForm = () => {
  return (
    <form className="max-w-md mx-auto p-4 shadow-md rounded">
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
