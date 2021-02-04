const Post = ({ title, body }) => {
  return (
    <article className="post-excerpt">
      <h2>{title}</h2>
      <p>{body.substring(0, 100)}</p>
    </article>
  );
};

export default Post;
