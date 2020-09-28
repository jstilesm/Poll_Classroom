import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session_form/signup_form_container';
import LoginContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import NavContainer from './nav_bar/nav_bar_container';
import ConnectorContainer from './connector/connector_container';
// import GroupsContainer from './groups/group_container';
import { Protected, AuthRoute } from '../util/route_util';


const App = () => (
    <>
        
        <NavContainer />
        {/* <h1 className="main-header">Class Everywhere</h1> */}
 
        <Switch>
            <Route exact path="/signup-alt" component={ConnectorContainer} />
            <Route exact path="/" component={SplashContainer} />
            <AuthRoute path='/login' component={LoginContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
            {/* <Protected path='/activities' component={GroupsContainer}/> */}
        </Switch>
        
        
    </>
)

export default App;