import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import "./styles.scss";
import api from "../../services/api";

const initialState = {
  title: "",
  body: "",
  author: "",
};

interface Props {
  type?: string;
}

const Form = ({ type }: Props) => {
  const navigate = useNavigate();
  const [post, setPost] = useState(initialState);

  const [, , , postId] = window.location.pathname.split("/");

  useEffect(() => {
    api.get(`/posts/${postId}`).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    type === "edit"
      ? api
          .put(`/posts/${postId}`, post)
          .then(() => {
            alert("Post updated!");
            navigate("/");
          })
          .catch((err) => {
            alert("Error updating post!");
            console.error(err);
          })
      : api
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
    <form onSubmit={handleFormSubmit}>
      {type === "edit" ? (
        <h2>Editing an existing post</h2>
      ) : (
        <h2>Create new post</h2>
      )}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          required
          className="form-control"
          name="title"
          id="title"
          value={post.title}
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
          value={post.body}
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
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
        />
      </div>
      <div className="form-buttons">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-primary"
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
