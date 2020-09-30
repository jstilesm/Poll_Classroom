import React from 'react';
import { Link } from 'react-router-dom';


class UserDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.whenBlur = this.whenBlur.bind(this);
        this.whenFocus = this.whenFocus.bind(this);
    }
    whenBlur(e) {
        e.preventDefault();
        if (e.type !== 'focus') {
            this.setState({ show: true })
        } else {
            this.setState({ show: false })
        }
    }

    whenFocus(e) {
        e.preventDefault();
        if (e.type === 'focus') {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }
    }
    render() {
        // debugger
        return (
            <div>
                    <button className="userbar" onFocus={this.whenFocus} onBlur={this.whenBlur}>{this.props.user.username}
                        <i className="userbar-cog" class="fas fa-cog"></i>
                    {this.state.show ? (
                        <ul className="user-dropdown-items" onClick={e => console.log(e)}>
                            <li onClick={e => e.stopPropagation()}>
                                <Link to='/'>
                                    <button className="header-button" onClick={this.props.logout}>Log Out</button>
                                </Link>
                            </li>
                            
                        </ul>
                    ) : null}
                </button>
            </div>
        )
    }
}

export default UserDropdown;

