import { useEffect, useState } from "react";

import api from "../../services/api";
import "./styles.scss";
import { BlogPost, Storage } from "blog";
import PostCard from "../../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { resetPost, setLoading } from "../../utils/actions";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const loading = useSelector((state: Storage) => state.loading);
  const [isEmpty, setIsEmpty] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        console.log(response);
        setIsEmpty(response.data.length === 0);
        setPosts(response.data);
        dispatch(resetPost());
        dispatch(setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : !isEmpty ? (
        posts.map((post: BlogPost) => <PostCard post={post} />)
      ) : (
        <h2>Add A New Post!</h2>
      )}
    </>
  );
};

export default PostList;
