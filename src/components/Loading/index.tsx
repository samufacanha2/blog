import "./styles.scss";
import { useNavigate } from "react-router";
import { FaBloggerB } from "react-icons/fa";
import TrailLink from "../TrailLink";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
