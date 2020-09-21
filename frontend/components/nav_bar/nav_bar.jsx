import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
    return (
        <header className="nav-bar">
        <h1 Poll EveryWhere></h1>
            <div>
            <Link className="button" to="/signup">Sign Up</Link>  
            <Link className="button" to="/login">Log In</Link>
            </div>
        </header>
    )
};


export default NavBar;