import { PayloadAction } from "@reduxjs/toolkit";
import { BlogPost } from "blog";

const initialState: BlogPost = {
  id: -1,
  title: "",
  body: "",
  author: "",
  signed: false,
  address: "",
};

const postReducer = (state = initialState, action: PayloadAction<BlogPost>) => {
  switch (action.type) {
    case "SET_POST":
      return action.payload ? (state = action.payload) : initialState;
    case "RESET_POST":
      return initialState;
    default:
      return state;
  }
};
export default postReducer;
