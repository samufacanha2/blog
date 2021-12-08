import { useEffect, useState } from "react";
import api from "../../services/api";
import { BlogPost } from "blog";
import { Link } from "react-router-dom";

import "./styles.scss";
export default function Post() {
  const [, , postId] = window.location.pathname.split("/");
  const [post, setPost] = useState(Object);

  useEffect(() => {
    api.get("posts/" + postId).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h2>{post.title}</h2>
        <br />
        <p>{post.body}</p>
        <br />
        <span>{post.author}</span>
        <img src={post.avatar} />
      </div>
    </div>
  );
}
