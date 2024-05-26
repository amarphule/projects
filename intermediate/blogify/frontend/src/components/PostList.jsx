import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import Post from "./Post";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [posts, postStatus, dispatch]);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4">
        Posts ({posts ? posts.length : 0})
      </h2>
      {posts &&
        posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
    </div>
  );
};

export default PostList;
