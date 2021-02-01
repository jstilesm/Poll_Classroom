import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../dropdown/dropdown-user";
import Button from "../buttons/button";

const NavBar = ({ currentUser, logout, testUser }) => {
  const test = { identifier: "tester", password: "password" };
  const location = useLocation();
  // const activnav =
  const hidenav =
    location.pathname == "/signup" ||
    location.pathname == "/login" ||
    location.pathname == "/signup-alt";
  let nonav;
  if (
    window.location.href.indexOf("/poll/") != -1 ||
    location.pathname == "/poll" ||
    location.pathname == "/poll-signup"
  ) {
    nonav = true;
  } else {
    nonav = false;
  }

  location.pathname == "/poll" || location.pathname == "/username";
  let questions;
  if (window.location.href.indexOf("questions") > -1) {
    questions = true;
  } else {
    questions = false;
  }

  const sessionButtons = () => (
    <>
      <Button blue={true} flexed={true} onClick={() => testUser(test)}>
        Test User
      </Button>
      <Button white={true} to="/signup-alt">
        Sign Up
      </Button>
      <Button blue={true} to="/login">
        Log In
      </Button>
    </>
    // <button className="test-user" onClick={() => testUser(test)}>Test User</button>
  );

  const personalNavButtons = () => (
    <>
      <Button white={true} to="/questions">
        Activities
      </Button>
      <Button blue={true} marginRight={true} onClick={logout}>
        Log Out
      </Button>
    </>
  );

  const questionButtons = () => (
    <>
      <Dropdown user={currentUser} logout={logout} />
    </>
  );
  const buttons = () => {
    // debugger
    if (questions) {
      return questionButtons();
    }
    if (hidenav) return;
    return currentUser ? personalNavButtons() : sessionButtons();
  };
  const personalNav = () => (
    <header className="nav-bar">
      <a className="logo-form" href="/"></a>
      <div className="site-header-right">{buttons()}</div>
    </header>
  );
  const pollNav = () => (
    <header className="poll-nav-bar">
      <div className="poll-items">
        <a className="poll-logo" href="localhost:3000/#/poll">
          {/* "https://poll-aa.herokuapp.com/#/poll" */}
          <img
            className="poll-mini-logo"
            src="https://lh3.googleusercontent.com/7ITYJK1YP86NRQqnWEATFWdvcGZ6qmPauJqIEEN7Cw48DZk9ghmEz_bJR2ccRw8aWQA"
          />
          <p className="poll-home">Home</p>
        </a>

        <a
          className="poll-logo"
          href="https://poll-aa.herokuapp.com/#/poll-signup"
          // "localhost:3000/#/poll-signup"
          // "https://poll-aa.herokuapp.com/#/poll-signup"
        >
          <span className="fas fa-user-plus"></span>
          <p className="poll-home">Registration</p>
        </a>

        <a
          className="poll-logo"
          href="https://poll-aa.herokuapp.com/#/poll-signup"
          // "localhost:3000/#/poll-signup"
          // "https://poll-aa.herokuapp.com/#/poll-signup"
        >
          <span className="fas fa-user-circle"></span>
          <p className="poll-home">Log in</p>
        </a>
      </div>
    </header>
  );
  if (!nonav) {
    return personalNav();
  } else {
    return pollNav();
  }
};

export default NavBar;
