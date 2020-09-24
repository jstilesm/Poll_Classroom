import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="splash-main">
            <NavBarContainer />
                <div className="main-paragraph">
                    <h1 className="main-text">Host interactive remote meetings, anywhere.</h1>
                    <p className="main-content">Capture powerful feedback instantly during virtual meetings, classes, events, and more.</p>
                </div>
                <div className="main-paragraph-image">
                    <img className="main-image" src="https://davhizrhxzcu1.cloudfront.net/assets/marquee/polling-from-home-remote-meeting-a5348e85e213ef2fa7f07068907d0cb661c5902a32a70b5c5ca25aed3f8a29a4.png" />
                </div>
                
            </div>
        )
    }
}

export default Splash;