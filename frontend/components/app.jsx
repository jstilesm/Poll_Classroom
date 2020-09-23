import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import NavContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <header className="topnav">
            
            <a className="logo-form" href="/"><img className="logo" src="https://pbs.twimg.com/profile_images/1219756472151601153/iKrwqrSJ_400x400.jpg" alt=""/></a>
            <a className="title" href="/">Class Everywhere</a>
            <NavContainer /> 
            
            
        </header>
        {/* <h1 className="main-header">Class Everywhere</h1> */}

        <br/>  
        
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <img className="splash-image" src="https://meded.ucsf.edu/sites/meded.ucsf.edu/files/inline-images/poll-illustration_2.png"/>
        
    </div>
)

export default App;