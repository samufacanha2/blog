import "./styles.scss";
import { useNavigate } from "react-router";
import { FaBloggerB } from "react-icons/fa";
import TrailLink from "../TrailLink";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <span className="home" onClick={() => navigate("/")}>
        <FaBloggerB />
        K-Blog
      </span>
      <TrailLink />
    </div>
  );
};

export default Menu;
