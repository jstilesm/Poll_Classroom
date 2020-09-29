import React from 'react'


class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }
    render() {
        return (
            <>
            {/* <h1>HELLO THERE</h1> */}
            <h1>Create A Question</h1>
            <form onSubmit="this.handleSubmit">
                <label>
                    <input type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')}/>
                </label>
                <label>
                    <input type="text" value={this.state.kind} placeholder="Kind" onChange={this.update('kind')}/>
                </label>
                <label>Response_Limit
                    <input type="number" value={this.state.response_limit} onChange={this.update('response_limit')}/>
                </label>
                <label>Closed?
                    <input type="checkbox" value={this.state.closed} name="closed?" onChange={this.update('closed')} />
                </label>
                <label>Allow_Unregistered?
                    <input type="checkbox" value={this.state.allow_unregistered} name="allow_unregistered?" onChange={this.update('allow_unregistered')}/>
                </label>
            </form>
            </>
        )
    }
}


export default QuestionForm;

