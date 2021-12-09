import "./styles.scss";
import { useNavigate } from "react-router";
import { FaBloggerB } from "react-icons/fa";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <span className="home" onClick={() => navigate("/")}>
        <FaBloggerB />
        K-Blog
      </span>
      <span>login</span>
    </div>
  );
};

export default Menu;
