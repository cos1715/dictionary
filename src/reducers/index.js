import { combineReducers } from "redux";
import reducerWords from "./reducerWords";
import reducerProgress from "./reducerProgress";

const allReducers = combineReducers({
  allWords: reducerWords,
  progress: reducerProgress
});

export default allReducers;
