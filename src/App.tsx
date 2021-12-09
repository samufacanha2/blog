import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import AddPost from "./pages/AddPost";
import { Provider } from "react-redux";

import Menu from "./components/Menu";
import store from "./utils/store";

import "./styles/global.scss";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="post/edit/:id" element={<EditPost />} />
            <Route path="post/add" element={<AddPost />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
