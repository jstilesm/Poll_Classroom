import { RECEIVE_CURRENT_VISITOR } from "../actions/visitor_actions";

const visitorReducer = (state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_VISITOR:
      return { id: action.visitor.id };
    default:
      return state;
  }
};

export default visitorReducer;
