import {
    RECEIVE_CURRRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session'
import { RECEIVE_CURRENT_USER } from '../actions/session';

// Default Session that returns a POJO
const _nullSession = {
    currentUser: null
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[currentUser] = action.user;

            return nextState;
            // return Object.assign({}, {currentUser: action.user})
        case LOGOUT_CURRENT_USER:
            return _nullSession;
    
        default:
            return state;
    }
};