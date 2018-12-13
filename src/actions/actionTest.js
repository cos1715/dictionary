export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const WRONG_ANSWER = "WRONG_ANSWER";

export const correctAnswer = score => {
  return {
    type: CORRECT_ANSWER,
    payload: score
  };
};

export const wrongAnswer = lives => {
  return {
    type: WRONG_ANSWER,
    payload: lives
  };
};