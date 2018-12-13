import { combineReducers } from "redux";
import reducerWords from "./reducerWords";
import reducerProgress from "./reducerProgress";
import reducerTest from "./reducerTest";

const allReducers = combineReducers({
  // allWords: reducerWords,
  progress: reducerProgress,
  tests: reducerTest,
});

export default allReducers;
