import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session_actions';


// Default User that returns a POJO
const _nullUser = {
    id: null
};

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    // let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
             return {id: action.user.id};

            // return Object.assign({}, {currentUser: action.user})
            // nextState[id] = action.currentUser.id;

            // return nextState;
            // //
        case LOGOUT_CURRENT_USER:
            return _nullUser;
    
        default:
            return state;
    }
};

export default sessionReducer;