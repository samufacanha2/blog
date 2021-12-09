import "./styles.scss";
import { useNavigate } from "react-router";
import { FiPlus } from "react-icons/fi";

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="add"
      onClick={() => {
        navigate("/post/add");
      }}
    >
      <FiPlus />
      <div className="text">New Post</div>
    </div>
  );
};

export default AddButton;
