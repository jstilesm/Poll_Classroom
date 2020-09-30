import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Dropdown from '../dropdown/dropdown-user';

const NavBar = ({currentUser, logout, testUser}) => {
    const test = { identifier: 'tester', password: 'password' };
    const location = useLocation();
    // const activnav = 
    const hidenav = (location.pathname == '/signup' || location.pathname == '/login' || location.pathname == '/signup-alt') 
    const questions = (location.pathname == '/questions')
    const sessionButtons = () => (
        <>
        <button className="test-user" onClick={() => testUser(test)}>Test User</button>
        <Link className="signup-link" to="/signup-alt">Sign Up</Link>
        <Link className="login-link" to="/login">Log In</Link>
        </>
    )
    const personalNavButtons = () => (
        <>
        <Link className="activities-link" to="/questions">Activities</Link>
        <button className="header-button" onClick={logout}>Log Out</button>
        </>
    )

    const questionButtons = () => (
        <>
            {/* <div className="userbar">{currentUser.username}
            <i className="userbar-cog" class="fas fa-cog"></i>
            </div> */}
            <Dropdown user={currentUser} logout={logout} />
        
        </>
    )
    const buttons = () => {
        // debugger
        if (questions) {
            return questionButtons()
        }
        if (hidenav) return;
        return currentUser ? personalNavButtons() : sessionButtons()
    }
    const personalNav = () => (
        <header className="nav-bar">
            <a className="logo-form" href="/"><img className="logo" src="https://davhizrhxzcu1.cloudfront.net/assets/media_kit/logo_blue-0a5ceed1257be54ad73861d21767f5c202bcf72d9b15e437d308655a24250702.png" alt="" /></a>
            <div className="site-header-right">
                {buttons()}
            </div>
        </header>
    )
    return personalNav()
};


export default NavBar;