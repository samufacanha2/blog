import { useEffect, useState } from "react";
import api from "../../services/api";
import { BlogPost } from "blog";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Home</h1>
      <div className="content">
        {posts.map((post: BlogPost) => (
          <>
            <Link to={`post/${post.id}`}>{post.title}</Link> <br />
          </>
        ))}
      </div>
      <div
        className="add"
        onClick={() => {
          navigate("/posts/add");
        }}
      >
        +
      </div>
    </div>
  );
}
