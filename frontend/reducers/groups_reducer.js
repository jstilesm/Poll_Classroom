import {
  RECEIVE_GROUPS,
  RECEIVE_GROUP,
  REMOVE_GROUP,
} from "../actions/group_actions";

const groupsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      for (let i = 0; i < action.groups.length; i++) {
        const group = action.groups[i];
        group.questions = group.questions.map((q) => q.id);
        nextState[group.id] = group;
      }
      return nextState;
    case RECEIVE_GROUP:
      nextState[action.group.id] = action.group;
      return nextState;
    case REMOVE_GROUP:
      delete nextState[action.groupId];
      return nextState;
    default:
      return state;
  }
};

export default groupsReducer;
