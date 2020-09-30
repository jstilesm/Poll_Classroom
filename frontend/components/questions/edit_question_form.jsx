import React from 'react'
// import { update } from '../../util/api_util_session';
import QuestionForm from './question_form';
import {Link } from 'react-router-dom';

class EditQuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    // componentDidMount() {
    //     this.props.requestQuestion(this.props.match.params.questionId);
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.props.history.push('/questions')
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        const { action, question, formType} = this.props;
        if (!question) return null;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input className="" type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')} />
                </label>
                <label>
                    <select value={this.state.kind} onChange={this.update('kind')}>
                        <option name="text_response">text_response</option>
                        <option name="mult_response">mult_response</option>
                    </select>
                    {/* <input type="text" value={this.state.kind} placeholder="Kind" onChange={this.update('kind')}/> */}
                </label>
                <label>Response_Limit
                    <input type="number" value={this.state.response_limit} onChange={this.update('response_limit')} />
                </label>
                <label>Closed?
                    <input type="checkbox" value={this.state.closed} name="closed?" onChange={this.update('closed')} />
                </label>
                <label>Allow_Unregistered?
                    <input type="checkbox" value={this.state.allow_unregistered} name="allow_unregistered?" onChange={this.update('allow_unregistered')} />
                </label>
                <button type="submit">Update</button>
                <div>{this.props.errors}</div>
            </form>
        )
    }
}


export default EditQuestionForm;