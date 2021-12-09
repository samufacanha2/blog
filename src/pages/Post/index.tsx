import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import api from "../../services/api";
import { BlogPost, Storage } from "blog";
import { setPost as setPost2, setLoading } from "../../utils/actions";
import Loading from "../../components/Loading";
import "./styles.scss";

export default function Post() {
  const [, , postId] = window.location.pathname.split("/");
  const [post, setPost] = useState(useSelector((state: Storage) => state.post));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: Storage) => state.loading);

  useEffect(() => {
    dispatch(setLoading(true));
    api.get("posts/" + postId).then((response) => {
      setPost(response.data);
      dispatch(setLoading(false));
      dispatch(setPost2(response.data));
    });
  }, []);

  const handleDelete = () => {
    api
      .delete(`/posts/${postId}`)
      .then(() => {
        alert("Post deleted!");
        navigate("/");
      })
      .catch((err) => {
        alert("Error deleting post!");
        console.error(err);
      });
  };
  const handleEdit = () => {
    navigate("/post/edit/" + postId);
  };

  return (
    <>
      {loading && <Loading />}
      <div id="single-post" className="container">
        <div className="content">
          {loading ? (
            <></>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}
