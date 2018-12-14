import { combineReducers } from "redux";
import reducerProgress from "./reducerProgress";
import reducerTest from "./reducerTest";

const allReducers = combineReducers({
  progress: reducerProgress,
  tests: reducerTest,
});

export default allReducers;
