import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VscTriangleRight } from "react-icons/vsc";

import api from "../../services/api";
import "./styles.scss";
import { BlogPost, Storage } from "blog";

const TrailLink = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const urlArray = window.location.pathname.split("/");
  const post = useSelector((state: Storage) => state.post);

  useEffect(() => {
    console.log(post);
  }, [post]);

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
