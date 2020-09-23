
import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { login, logout } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    testUser: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(NavBar);