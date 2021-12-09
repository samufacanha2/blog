import { combineReducers } from "redux";

import loadingReducer from "./loading";
import postReducer from "./post";

const rootReducer = combineReducers({
  loading: loadingReducer,
  post: postReducer,
});
export default rootReducer;
