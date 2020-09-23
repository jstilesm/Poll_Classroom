import * as APIUtil from '../util/api_util_session';
 
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
 

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});
 
const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

// errors
const receiveErrors = errors => {
    // debugger;
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors,
    };
};



// thunk actions

export const signup = user => dispatch => (
    APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    er => (dispatch(receiveErrors(er.responseJSON))))
);

export const login = user => dispatch => (
    APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    er => (dispatch(receiveErrors(er.responseJSON))))
);

export const logout = () => dispatch => (
    APIUtil.logout() 
    .then(() => dispatch(logoutCurrentUser()))
);
    
