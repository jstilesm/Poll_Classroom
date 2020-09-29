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
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }
    render() {
        return (
            <>
            <button onClick = {this.props.openModal}>Create</button>
            <div onClick={this.props.closeModal} className="close-x">X</div>
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
            
            
            {/* <h1>HI CRHIS</h1> */}

            </>
        )
    }
}


export default QuestionForm;

