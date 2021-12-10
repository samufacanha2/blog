import "./styles.scss";
import { useNavigate } from "react-router";
import { BlogPost } from "blog";
import { useDispatch } from "react-redux";
import { setPost } from "../../utils/actions";

interface Props {
  post: BlogPost;
}
const PostCard = ({ post }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPost(post));
    navigate(`post/${post.id}`);
  };

  return (
    <div className="post" onClick={handleClick}>
      <span className="title">{post.title}</span>
      <p>{post.body?.substring(0, 300)}</p>
    </div>
  );
};

export default PostCard;
