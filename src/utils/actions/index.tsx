import { BlogPost, Wallet } from "blog";

export const setLoading = (loading: boolean) => {
  return {
    type: "SET_LOADING",
    payload: loading,
  };
};

export const setPost = (post: BlogPost) => {
  return {
    type: "SET_POST",
    payload: post,
  };
};

export const resetPost = () => {
  return {
    type: "RESET_POST",
  };
};

export const setWallet = (wallet: Wallet) => {
  return {
    type: "SET_WALLET",
    payload: wallet,
  };
};

export const resetWallet = () => {
  return {
    type: "RESET_WALLET",
  };
};
