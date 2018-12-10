import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers/index";

export default function setupStore() {
  return createStore(
    allReducers,
    composeWithDevTools()
  );
}
