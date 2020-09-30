import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import Splash from './splash';


// dont need to rely on state (mSTP) for session

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'splash',
    };
};
const mDTP = dispatch => {
    return {
        clearErrors: () => dispatch(clearErrors()),
        
    };
};

export default connect(mSTP, mDTP)(Splash);