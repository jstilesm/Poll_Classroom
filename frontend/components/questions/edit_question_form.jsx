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
        if (!this.props.errors) {
            this.props.history.push('/questions');
        } 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() {
        let number = this.props.question.id;
        const { errors, question} = this.props;
        if (!question) return null;
        return (
            // <div className="edit-page">
                
            // </div>
            <div className="show-page">
                {/* <h1>HELLO</h1> */}
                {/* <h1>Title</h1>
                <h1>{this.props.question.title}</h1>
                <h3>{this.props.question.kind}</h3>
                <p>{this.props.question.closed}</p>
                <p>{this.props.question.allow_unregistered}</p>
                <p>{this.props.question.response_limit}</p> */}
                <div className="grey-box">
                    <form id="my-form" className="edit-form" onSubmit={this.handleSubmit}>
                        <label className="title-label" >
                        <input className="edit-title-box" type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')} />
                        </label>
                        {/* <label>
                        <select value={this.state.kind} onChange={this.update('kind')}>
                            <option name="text_response">text_response</option>
                            <option name="mult_response">mult_response</option>
                        </select>
                       
                    </label> */}
                        {/* <label className="response-label">Response_Limit
                        <input type="number" value={this.state.response_limit} onChange={this.update('response_limit')} />
                        </label>
                        <label className="close-label">Closed?
                        <input type="checkbox" value={this.state.closed} name="closed?" onChange={this.update('closed')} />
                        </label>
                        <label className="register-label">Allow_Unregistered?
                        <input type="checkbox" value={this.state.allow_unregistered} name="allow_unregistered?" onChange={this.update('allow_unregistered')} />
                        </label> */}
                        {/* <button className="save-button" type="submit">Save</button> */}
                        <ul className="create-errors">
                            {errors.map((error, i) => (
                                <li className="question-error-items" key={`error-${i}`}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </form>

                </div>
                {/* <Link to="/">Link</Link> */}
                <div className="edit-white-box">
                    <div className="button-box">
                        <button  type="submit" form="my-form" className="edit-create-button">Create</button>
                        <Link className="edit-back-button" to={`/questions/${number}`}>Cancel</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default EditQuestionForm;