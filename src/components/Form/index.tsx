import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  setPost as setPost2,
  setLoading,
  resetPost,
} from "../../utils/actions";

import "./styles.scss";
import api from "../../services/api";

const initialState = {
  title: "",
  body: "",
  author: "",
  signed: false,
  address: "",
};

interface Props {
  type?: string;
}

const newWindow: any = window;

const Form = ({ type }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wallet = useSelector((state: Storage) => state.wallet);
  const [post, setPost] = useState(initialState);
  const [valid, setValid] = useState(false);

  const [, , , postId] = window.location.pathname.split("/");
  const reduxPost = useSelector((state: Storage) => state.post);

  useEffect(() => {
    reduxPost.id !== -1 && type === "edit" ? setPost(reduxPost) : fetchPost();
  }, []);

  const fetchPost = () =>
    api.get(`/posts/${postId}`).then((response) => {
      setPost(response.data);
      dispatch(setPost2(response.data));
      dispatch(setLoading(false));
    });

  useEffect(() => {
    handleInputCheck();
    console.log(post);
  }, [post]);

  const handleInputCheck = () => {
    return post.title && post.body && post.author
      ? setValid(true)
      : setValid(false);
  };
  const handleSubmitClick = () => {
    if (!valid) {
      toast.error("Fill all fields!");
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    type === "edit"
      ? post.address === wallet.address || post.address.length < 18
        ? api
            .put(`/posts/${postId}`, post)
            .then(() => {
              toast.success("Post updated!");
              dispatch(setPost2({ ...post, id: parseInt(postId) }));
              navigate(-1);
            })
            .catch((err) => {
              toast.error("Error updating post!");
              console.error(err);
            })
        : toast.error("You are not the author of this post!")
      : api
          .post("/posts", post)
          .then(() => {
            toast.success("Post added!");
            navigate("/");
          })
          .catch((err) => {
            toast.error("Error adding post!");
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
          maxLength={64}
          placeholder="Enter the post title here"
          id="title"
          value={post.title}
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
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
          placeholder="Enter the post content here"
          onChange={(e) => {
            setPost({ ...post, body: e.target.value });
          }}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          required
          className="form-control"
          name="author"
          id="author"
          placeholder="Enter you username here"
          value={post.author}
          onChange={(e) => {
            setPost({ ...post, author: e.target.value });
          }}
        />
      </div>
      {type !== "edit" && (
        <div className="form-group-row">
          <input
            type="checkbox"
            className="form-control"
            name="signed"
            id="signed"
            disabled={wallet.address === ""}
            placeholder="Enter you username here"
            checked={post.signed}
            onChange={(e) => {
              setPost({
                ...post,
                signed: !!e.target.value,
                address: !!e.target.value
                  ? newWindow.tronWeb.defaultAddress.base58
                  : "",
              });
            }}
          />
          <label htmlFor="author"> Signed</label>
        </div>
      )}
      <div className="form-buttons">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-primary"
        >
          Back
        </button>
        <button
          type="submit"
          className={`btn btn-primary ${valid ? "valid" : "not-valid"}`}
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
