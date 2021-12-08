import { useEffect, useState } from "react";
import api from "../../services/api";
import { Post } from "blog";
import "./styles.scss";
type PostType = Post;
export default function Home() {
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
        {posts.map((post: PostType) => (
          <p>{post.title}</p>
        ))}
      </div>
    </div>
  );
}
