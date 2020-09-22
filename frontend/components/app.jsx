import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <h1>Poll Everywhere</h1>
        <Route path='/signup' component={SignupContainer} />
        <NavContainer /> 
    </div>
)

export default App;