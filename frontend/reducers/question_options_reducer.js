import {
  RECEIVE_QUESTION_OPTION,
  RECEIVE_QUESTION_OPTIONS,
} from "../actions/question_options_actions";

const questionoptionReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_QUESTION_OPTIONS:
      return action.question_options;
    case RECEIVE_QUESTION_OPTION:
      nextState[action.question_option.id] = action.question_option;
      return nextState;
    default:
      return state;
  }
};

export default questionoptionReducer;
