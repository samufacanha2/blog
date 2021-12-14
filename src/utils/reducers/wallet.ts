import { PayloadAction } from "@reduxjs/toolkit";
import { Wallet } from "blog";

const initialState: Wallet = {
  isLoggedIn: false,
  address: "",
  isInstalled: false,
};

const walletReducer = (state = initialState, action: PayloadAction<Wallet>) => {
  switch (action.type) {
    case "SET_WALLET":
      return action.payload ? (state = action.payload) : initialState;
    case "RESET_WALLET":
      return initialState;
    default:
      return state;
  }
};
export default walletReducer;
