/* eslint-disable react/prop-types */
const Post = ({ post }) => {
  return (
    <div className="p-4 border-b">
      <h2 className="text-2xl font-semibold mb-4 capitalize">{post.title}</h2>
      <p className="text-gray-800">{post.content}</p>
      <p className="text-gray-500 text-right"> - {post.author}</p>
    </div>
  );
};

export default Post;
