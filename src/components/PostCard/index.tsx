import "./styles.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { BlogPost } from "blog";
import { useDispatch } from "react-redux";
interface Props {
  post: BlogPost;
}
const PostCard = ({ post }: Props) => {
  const navigate = useNavigate();
  return (
    <Link to={`post/${post.id}`} className="post">
      <span className="title">{post.title}</span>
      <p>{post.body?.substring(0, 300)}</p>
    </Link>
  );
};

export default PostCard;
