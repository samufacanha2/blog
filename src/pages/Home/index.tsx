import { useEffect, useState } from "react";
import api from "../../services/api";
import { BlogPost } from "blog";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import AddButton from "../../components/AddButton";
import PostCard from "../../components/PostCard";
export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
      console.log(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="content">
        {loading ? (
          <h2>Loading...</h2>
        ) : posts.length ? (
          posts.map((post: BlogPost) => <PostCard post={post} />)
        ) : (
          <h2>No Posts</h2>
        )}
        <AddButton />
      </div>
    </div>
  );
}
