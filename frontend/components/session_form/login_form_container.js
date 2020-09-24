import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import {login, clearErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
// import { checkUser } from '../../util/api_util_session';

const mSTP = ({errors}) => {
    // debugger
    return {
        errors: errors.session,
        formType: 'Log in',
    };
};

const mDTP = dispatch => {
    // debugger
    return { 
        formFunction: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        // checkUser: identifier => dispatch(checkUser(identifier)),
    };
};

export default connect(mSTP,mDTP)(SessionForm);