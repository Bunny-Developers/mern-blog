
const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href={`/posts/${post.id}`}>Read more</a>
    </div>
  );
};

export default BlogCard;
