import { combineReducers } from "redux";

import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entitites_reducer";
import uiReducer from "./ui_reducer";
import visitorReducer from "./visitor_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  visitor: visitorReducer,
  entities: entitiesReducer,
  ui: uiReducer,
});

export default rootReducer;
