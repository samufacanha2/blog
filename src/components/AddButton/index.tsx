import "./styles.scss";
import { useNavigate } from "react-router";

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="add"
      onClick={() => {
        navigate("/post/add");
      }}
    >
      <span>+</span>
    </div>
  );
};

export default AddButton;
