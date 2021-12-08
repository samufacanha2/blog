import "./styles.scss";
import { useNavigate } from "react-router";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <span className="home" onClick={() => navigate("/")}>
        Home
      </span>
      <span>login</span>
    </div>
  );
};

export default Menu;
