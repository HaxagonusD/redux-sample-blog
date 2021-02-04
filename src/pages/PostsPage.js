import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../redux/postsReducer";

const PostsPage = () => {
  const { posts, loading, hasError } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) {
      return "Loading posts";
    } else if (hasError) {
      return "There was an erroe getting the posts refresh";
    }
    return posts.map((post) => <Post key={post.id} {...post} />);
  };
  return (
    <div>
      <h1>Here are the Posts</h1>
      {renderPosts()}
    </div>
  );
};

export default PostsPage;
