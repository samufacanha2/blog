import { Link } from "react-router-dom";
import "./styles.scss";
import api from "../../services/api";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const initialState = {
  title: "",
  body: "",
  author: "",
};

export default function Addpost() {
  const navigate = useNavigate();
  const [post, setPost] = useState(initialState);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    api
      .post("/posts", post)
      .then(() => {
        alert("Post added!");
        navigate("/");
      })
      .catch((err) => {
        alert("Error adding post!");
        console.error(err);
      });
  };
  return (
    <div className="container">
      <div className="content">
        <form onSubmit={handleFormSubmit}>
          <h2>Create new post</h2>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              className="form-control"
              name="title"
              id="title"
              onChange={(e) => setPost({ ...post, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Content</label>
            <textarea
              className="form-control"
              id="body"
              required
              name="body"
              placeholder="Enter post body"
              onChange={(e) => setPost({ ...post, body: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author Username</label>
            <input
              type="text"
              required
              className="form-control"
              name="author"
              id="author"
              onChange={(e) => setPost({ ...post, author: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
