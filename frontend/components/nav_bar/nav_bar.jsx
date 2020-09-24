import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout, testUser}) => {
    const test = { identifier: 'tester', password: 'password' };
    const sessionLink = () => (
        <header className="login-signup">
            <div className="button" >
                <button className="test-user" onClick={() => testUser(test)}>Test User</button>
                <Link className="signup-link" to="/signup">Sign Up</Link>
                <br/>
                <Link className="login-link" to="/login">Log In</Link>
            </div>
        </header>

    );
    const personalNav = () => (
        <div>
        <header className="nav-bar">
            <div>
                {/* <h2 className="header-main">{currentUser.username}</h2> */}
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </header>
        </div>
    )
    return currentUser ? personalNav() : sessionLink();
};


export default NavBar;