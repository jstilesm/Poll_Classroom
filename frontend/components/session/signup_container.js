import {connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Signup from './signup';


// dont need to rely on state (mSTP) for session

const mDTP = dispatch => {
    return {
    signup: formUser => dispatch(signup(formUser))
    };
};

export default connect(null, mDTP)(Signup);