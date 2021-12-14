import "./styles.scss";
import { useNavigate } from "react-router";
import { FaBloggerB } from "react-icons/fa";
import TrailLink from "../TrailLink";
import ConnectWallet from "../ConnectWallet";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-container">
      <div className="icon-trail">
        <span className="home" onClick={() => navigate("/")}>
          K-
          <FaBloggerB />
          log
        </span>
        <TrailLink />
      </div>
      <ConnectWallet />
    </div>
  );
};

export default Menu;
