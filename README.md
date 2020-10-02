# Poll Classroom

Welcome to [Poll Classroom](https://poll-aa.herokuapp.com/), a clone of [Poll Everywhere](https://www.polleverywhere.com/).

Poll Classroom is a website that allows a user to create questions to share live via a link. Currently, a user can sign up, log in, create edit and delete their questions. 
### Technologies Used:



#### Rails Backend
- Jbuilder for views


#### React Redux Frontend

- Dropdown design
- Error Rendering


#### SCSS for Styling



### NAV Bar Design

```
import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Dropdown from '../dropdown/dropdown-user'

const NavBar = ({currentUser, logout, testUser}) => {
    const test = { identifier: 'tester', password: 'password' };
    const location = useLocation();
    // const activnav = 
    const hidenav = (location.pathname == '/signup' || location.pathname == '/login' || location.pathname == '/signup-alt') 
    const questions = (location.pathname == '/questions');
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
```

### Backend App Search For Username/ Password Functionality.
#### Below enables log in page to render password field if user has signed up.
#### user.rb
```
def self.find_by_username_or_email(identifier)   
        User.where(username: identifier).or(User.where(email: identifier)).first
    end
```
#### users_controller.rb
```
def exists
        identifier = params.require(:identifier) 
        # debugger
        @user = User.find_by_username_or_email(identifier)
        if @user
            render json: true
        else
            render json: false
        end
    end
```
#### sessions_controller.rb
```
def create
        @user = User.find_by_username_or_email(login_params[:identifier])
        # debugger
        if @user.nil?
            render json: ['Account not found'], status: 401
        elsif @user.is_password?(login_params[:password])
            login(@user)    
            render "api/users/show"
        else
            render json: ['Password is incorrect'], status: 401
        end
    end
```

![](login-gif.gif)


### Future Directions:
Web Response functionality to be added.
