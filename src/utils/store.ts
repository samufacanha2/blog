import { createStore } from "redux";
import rootReducer from "./reducers";

const newWindow: any = window;

const store = createStore(
  rootReducer,
  newWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
    newWindow.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
