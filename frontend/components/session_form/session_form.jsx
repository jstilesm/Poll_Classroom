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
        if (this.props.formType === "sign up" ) { 
        return (
            <div className = "signup-form">
                <h2 className= "signup-title">Presenter {this.props.formType}</h2>
                <form onSubmit={this.handleSubmit} className="form-box">
                    {this.errors()}

                    <label className="firstname">
                        <input className="firstname-input" type="text" value={this.state.first_name} placeholder="First name" onChange={this.update('first_name')}/>
                    </label>
                    <br/>
                    <label className="lastname">
                        <input className="lastname-input" type="text" value={this.state.last_name} placeholder="Last name" onChange={this.update('last_name')}/>
                    </label>
                    
                    <br/>
                    <label className="email" >
                        <input className="email-input" type="text" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
                    </label>
                    <br/>
                    <label className="password">
                        <input className="password-input" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}/>
                    </label>
                    <br/>
                    <button className="signup-submit" type="submit">{this.props.formType}</button>

  
                </form>
            </div>
        )
    } else {
            return (
                <div className="login-form">
                    <h2 className="login-title">{this.props.formType}</h2>
                    <form onSubmit={this.handleSubmit} className="form-box">
                        {this.errors()}

                        <label className="login-key">
                        <input className="login-email-input" type="text" value={this.state.email} placeholder="Username or Email " onChange={this.update('email')} />
                        </label>
                        
                        <br />
                        <button className="login-submit" type="submit">Next</button>

                    </form>
                </div>
            )
        }
    }
}
export default SessionForm;