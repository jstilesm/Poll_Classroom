import {
  RECEIVE_MULT_RESPONSE,
  RECEIVE_MULT_RESPONSES,
} from "../actions/mult_response_actions";

const multresponseReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MULT_RESPONSES:
      return action.mult_responses;
    case RECEIVE_MULT_RESPONSE:
      nextState[action.mult_response.id] = action.mult_response;
      return nextState;
    default:
      return state;
  }
};

export default multresponseReducer;
