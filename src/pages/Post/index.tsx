import { useEffect, useState } from "react";
import api from "../../services/api";
import { BlogPost } from "blog";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import "./styles.scss";
export default function Post() {
  const [, , postId] = window.location.pathname.split("/");
  const [post, setPost] = useState(Object);

  useEffect(() => {
    api.get("posts/" + postId).then((response) => {
      setPost(response.data);
    });
  }, []);

  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <div id="single-post" className="container">
      <div className="content">
        <div className="card">
          <h2>
            <span>{post.title}</span>{" "}
            <div className="icons">
              <div className="icon edit-icon" onClick={handleEdit}>
                <FiEdit />
              </div>
              <div className="icon delete-icon" onClick={handleDelete}>
                <FiTrash />
              </div>
            </div>
          </h2>
          <p>{post.body}</p>
          <span className="author">- {post.author}</span>
        </div>
      </div>
    </div>
  );
}
