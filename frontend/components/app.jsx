import React from 'react';
import SignupContainer from './session/signup_container';
import { Route} from 'react-router-dom';
import NavContainer from './nav_bar/nav_bar_container';


const App = () => (
    <div>
        <h1>PollEverywhere</h1>
        <Route path='/signup' component={SignupContainer} />
        <NavContainer /> 
    </div>
)

export default App;