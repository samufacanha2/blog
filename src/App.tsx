import React from "react";
import logo from "./logo.svg";
import "./styles/global.scss";
import Home from "./pages/Home";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import AddPost from "./pages/AddPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="post/edit/:id" element={<EditPost />} />
        <Route path="post/add" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
