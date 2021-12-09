import { PayloadAction } from "@reduxjs/toolkit";

const loadingReducer = (state = true, action: PayloadAction<boolean>) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
    default:
      return state;
  }
};
export default loadingReducer;
