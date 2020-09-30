import React from 'react'


class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal);
        this.props.history.push('/questions');
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }
    render() {
        // debugger
        // debugger
        return (
            <>
            <button onClick = {this.handleSubmit}>Create</button>
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')}/>
                </label>
                <label>
                        <select value={this.state.kind} onChange={this.update('kind')}>
                            <option name="mult_response">mult_response</option>
                            <option name="text_response">text_response</option>
                        </select>
                    {/* <input type="text" value={this.state.kind} placeholder="Kind" onChange={this.update('kind')}/> */}
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
                    <div>{this.props.errors}</div>
            </form>
        

            </>
        )
    }
}


export default QuestionForm;

