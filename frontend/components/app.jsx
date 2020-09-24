import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
// import NavContainer from './nav_bar/nav_bar_container';
import { Protected, AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <header className="topnav">
            
            <a className="logo-form" href="/"><img className="logo" src="https://davhizrhxzcu1.cloudfront.net/assets/media_kit/logo_blue-0a5ceed1257be54ad73861d21767f5c202bcf72d9b15e437d308655a24250702.png" alt=""/></a>
            
            {/* <a className="title" href="/">Class Everywhere</a> */}
        
         
        </header>
        {/* <h1 className="main-header">Class Everywhere</h1> */}
 
        <Switch>
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
        </Switch>
        
        
    </div>
)

export default App;