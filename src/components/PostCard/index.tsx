import "./styles.scss";
import { Link } from "react-router-dom";
import { BlogPost } from "blog";
interface Props {
  post: BlogPost;
}
const PostCard = ({ post }: Props) => {
  return (
    <Link to={`post/${post.id}`} className="post">
      <span className="title">{post.title}</span>
      <p>{post.body?.substring(0, 300)}</p>
    </Link>
  );
};

export default PostCard;
