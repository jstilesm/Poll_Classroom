import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
    const sessionLink = () => (
        <nav className="login-signup">
            <div className="buttons">
                <Link className="signup-button" to="/signup">Sign Up</Link>
                <br/>
                <Link className="signup-button" to="/login">Log In</Link>
            </div>
        </nav>

    );
    const personalNav = () => (
        <div>
        <header className="nav-bar">
        {/* <h1> Poll EveryWhere </h1> */}
            <div>
                <h2 className="header-main">{currentUser.username}</h2>
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </header>
        </div>
    )
    return currentUser ? personalNav() : sessionLink();
};


export default NavBar;