import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout, testUser}) => {
    const test = {username: 'tester', email: 'tester@aol.com', first_name: 'test', last_name: 'er', password: 'password'};
    const sessionLink = () => (
        <header className="login-signup">
            <div className="site-header-right" >
                <button className="test-user" onClick={() => testUser(test)}>Test User</button>
                <Link className="signup-link" to="/signup">Sign Up</Link>
                <Link className="login-link" to="/login">Log In</Link>
            </div>
        </header>

    );
    const personalNav = () => (
        <div>
        <header className="nav-bar">
            <div className="logged-in-bar">
                {/* <h2 className="header-main">{currentUser.username}</h2> */}
                <Link className="activities-link" to="/activities">Activities</Link>
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </header>
        </div>
    )
    return currentUser ? personalNav() : sessionLink();
};


export default NavBar;