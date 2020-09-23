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

    // componentDidUpdate(oldProps, oldState) {
    //     console.log(this.props.errors)
    //     if (this.props.errors !== oldProps.errors) {
    //         console.log(oldProps)
    //     }

    // }

    componentWillUnmount() {
        this.props.clearErrors();
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
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li className="error-items" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (this.props.formType === "sign up" ) { 
            // debugger
        return (
            <div className = "signup-form-container">
                <h2 className= "signup-title">Presenter {this.props.formType}</h2>
                <form onSubmit={this.handleSubmit} className="form-box">


                    <label className="firstname">
                        <input className="firstname-input" type="text" value={this.state.first_name} placeholder="First name" onChange={this.update('first_name')}/>
                    </label>
                    <br/>
                    <label className="lastname">
                        <input className="lastname-input" type="text" value={this.state.last_name} placeholder="Last name" onChange={this.update('last_name')}/>
                    </label>
                    
                    <br/>
                    <label className="email" >
                        <input className="email-input" type="email" value={this.state.email} placeholder="Email" onChange={this.update('email')}/>
                    </label>
                    <br/>
                    <label className="username" >
                        <input className="email-input" type="text" value={this.state.username} placeholder="Username" onChange={this.update('username')}/>
                    </label>
                    <br/>
                    <label className="password">
                        <input className="password-input" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')}/>
                    </label>
                    <br/>
                    {this.errors()}
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
                        

                        <label className="firstname">
                            <input className="firstname-input" type="text" value={this.state.first_name} placeholder="First name" onChange={this.update('first_name')} />
                        </label>
                        <br />
                        <label className="lastname">
                            <input className="lastname-input" type="text" value={this.state.last_name} placeholder="Last name" onChange={this.update('last_name')} />
                        </label>

                        <br />
                        <label className="email" >
                            <input className="email-input" type="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} />
                        </label>
                        <br />
                        <label className="username" >
                            <input className="email-input" type="text" value={this.state.username} placeholder="Username" onChange={this.update('username')} />
                        </label>
                        <br />
                        <label className="password">
                            <input className="password-input" type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} />
                        </label>
                        <br />
                        {this.errors()}
                        <br/>
                        <button className="login-submit" type="submit">Next</button>

                    </form>
                </div>
            )
        }
    }
}
export default SessionForm;