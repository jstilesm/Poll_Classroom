import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import questionsReducer from "./questions_reducer";
import groupsReducer from "./groups_reducer";
import multresponseReducer from "./multresponse_reducer.js";
import questionoptionReducer from "./question_options_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  groups: groupsReducer,
  multresponse: multresponseReducer,
  questionoption: questionoptionReducer,
});

export default entitiesReducer;
