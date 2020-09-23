import {connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';


// dont need to rely on state (mSTP) for session

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'sign up',
    };
};
const mDTP = dispatch => {
    return {
    formFunction: user => dispatch(signup(user))
    };
};

export default connect(mSTP, mDTP)(SessionForm);