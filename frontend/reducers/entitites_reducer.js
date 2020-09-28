
import {combineReducers} from 'redux';

import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import groupsReducer from './groups_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    groups: groupsReducer
});

export default entitiesReducer;