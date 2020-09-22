
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { logout, login, signup } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {


    const store = configureStore();
    const root = document.getElementById('root');


    // test
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // test end

    ReactDOM.render(<Root store={store} />, root);
});