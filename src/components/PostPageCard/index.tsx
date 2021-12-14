import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiEdit, FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Storage } from "blog";
import { setPost as setPost2, setLoading } from "../../utils/actions";
import "./styles.scss";
import Loading from "../../components/Loading";

const newWindow: any = window;

const PostPageCard = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(useSelector((state: Storage) => state.post));
  const wallet = useSelector((state: Storage) => state.wallet);
  const dispatch = useDispatch();
  const loading = useSelector((state: Storage) => state.loading);
  const [, , postId] = window.location.pathname.split("/");

  useEffect(() => {
    dispatch(setLoading(true));
    post.id !== -1 ? dispatch(setLoading(false)) : fetchPost();
  }, [dispatch, post.id]);

  const fetchPost = () =>
    api.get(`/posts/${postId}`).then((response) => {
      setPost(response.data);
      dispatch(setPost2(response.data));
      dispatch(setLoading(false));
      console.log(response.data.body.split("\n"));
    });

  const handleDelete = () => {
    console.log(post);

    post.address === wallet.address || post.address.length < 18
      ? window.confirm("Are you sure you want to delete this post?")
        ? api
            .delete(`/posts/${postId}`)
            .then(() => {
              toast.success("Post deleted!");

              navigate("/");
            })
            .catch((err) => {
              toast.error("Error deleting post!");
              console.error(err);
            })
        : console.log("canceled")
      : toast.error("You can only delete your own posts!");
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
                {(wallet.address === post.address || !post.signed) && (
                  <div className="icons">
                    <div className="icon edit-icon" onClick={handleEdit}>
                      <FiEdit />
                    </div>
                    <div className="icon delete-icon" onClick={handleDelete}>
                      <FiTrash />
                    </div>
                  </div>
                )}
              </h2>
              <div className="body-author">
                <div className="body">
                  {post.body.split("\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <span className="author">- {post.author}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostPageCard;
