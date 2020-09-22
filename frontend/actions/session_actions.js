import * as APIUtil from '../utils/api_util_session';


 
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

// errors
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


// thunk actions

export const signup = user => dispatch => (
    APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveErrors(error.responseJSON)))
);

export const login = user => dispatch => (
    APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user))),
    error => (dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
    APIUtil.logout() 
    .then(() => dispatch(logoutCurrentUser())),
    error => (dispatch(receiveErrors(error.responseJSON)))
);
    


// Dispatch Errors?