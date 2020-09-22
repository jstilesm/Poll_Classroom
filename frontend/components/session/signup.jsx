import React from 'react';

class Signup extends React.Component {
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
        return () => {
            this.setState({ [field]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
        .then(() => this.props.history.push('/questions'));
    }

    render() {
        return (
            <div className ="session-form">
                <h2>Sign Up</h2>
                <form>
                    

                    <label>FirstName:
                        <input type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
                    </label>
                    <label>LastName:
                        <input type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
                    </label>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onchanged={this.change('password')}/>
                    </label>
                    <button onClick={this.handeSubmit}>Sign Up</button>

  
                </form>
            </div>
        )
    }
}
export default Signup;