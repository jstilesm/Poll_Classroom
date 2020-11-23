import {
  CLEAR_ERRORS,
  RECEIVE_GROUP_ERRORS,
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
} from "../actions/group_actions";

const groupErrorsReducer = (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUP_ERRORS:
      // debugger
      return action.errors;
    case RECEIVE_GROUP:
      return [];
    case RECEIVE_GROUPS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default groupErrorsReducer;
