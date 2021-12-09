import "./styles.scss";
import { useNavigate } from "react-router";
import { useState } from "react";
import Form from "../../components/Form";

const initialState = {
  title: "",
  body: "",
  author: "",
};

export default function Addpost() {
  const navigate = useNavigate();
  const [post, setPost] = useState(initialState);

  return (
    <div className="container">
      <div className="content">
        <Form />
      </div>
    </div>
  );
}
