import {connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';


// dont need to rely on state (mSTP) for session

const mDTP = dispatch => {
    return {
    createNewUser: formUser => dispatch(createNewUser(formUser))
    };
};

connect(null, mDTP)(Signup)