import { CORRECT_ANSWER, WRONG_ANSWER } from "../actions/actionTest";

const initState = {
  highScore: 0,
  lives: 5,
  score: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return { ...state, score: action.payload };
    case WRONG_ANSWER:
      return { ...state, lives: action.payload };
    default:
      return state;
  }
};