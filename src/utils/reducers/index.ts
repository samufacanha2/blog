import { combineReducers } from "redux";

import loadingReducer from "./loading";
import walletReducer from "./wallet";
import postReducer from "./post";

const rootReducer = combineReducers({
  loading: loadingReducer,
  post: postReducer,
  wallet: walletReducer,
});
export default rootReducer;
