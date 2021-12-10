import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { VscTriangleRight } from "react-icons/vsc";

import "./styles.scss";
import { Storage } from "blog";

const TrailLink = () => {
  const navigate = useNavigate();
  const urlArray = window.location.pathname.split("/");
  const post = useSelector((state: Storage) => state.post);

  const getHtml = () => {
    switch (urlArray.length) {
      case 2:
        return <></>;
      case 3:
        return parseInt(urlArray[2]).toString() !== "NaN" ? (
          <span className="trail">
            <VscTriangleRight className="triangle" />
            {post.title}
          </span>
        ) : (
          <span className="trail">
            <VscTriangleRight className="triangle" />
            Add Post
          </span>
        );
      case 4:
        return (
          <>
            <span
              onClick={() => {
                navigate(-1);
              }}
              className="trail clickable"
            >
              <VscTriangleRight className="triangle" />
              <span>{post.title}</span>
            </span>
            <span className="trail">
              <VscTriangleRight className="triangle" />
              <span>Edit</span>
            </span>
          </>
        );
      default:
        return <></>;
    }
  };
  return getHtml();
};

export default TrailLink;
