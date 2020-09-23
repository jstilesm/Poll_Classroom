import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import NavContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <nav className="topnav">
            <a className="logo" href="/">Class Everywhere</a>
            <NavContainer /> 
        </nav>
        {/* <h1 className="main-header">Class Everywhere</h1> */}

        <br/>  

        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        
    </div>
)

export default App;