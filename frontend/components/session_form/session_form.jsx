import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value});
        };
    }
 
    handleSubmit(e) {
        e.preventDefault();
        this.props.formFunction(this.state)
        // .then(() => this.props.history.push('/questions'));
    }

    errors() {
        return (
            <ul>
                {this.props.errors.map((error,i) => (
                    <li key={`error-${i}}`}>
                    {error}
                    </li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <div className ="session-form">
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit} className="form-box">
                    {this.errors()}

                    <label>First name:
                        <input className="firstname-input" type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
                    </label>
                    <br/>
                    <label>Last name:
                        <input className="lastname-input" type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
                    </label>
                    <br/>
                    <label>Username:
                        <input className="username-input" type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <br/>
                    <label>Email:
                        <input className="email-input" type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <br/>
                    <label>Password:
                        <input className="password-input" type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br/>
                    <button className="session-submit" type="submit">{this.props.formType}</button>

  
                </form>
            </div>
        )
    }
}
export default SessionForm;