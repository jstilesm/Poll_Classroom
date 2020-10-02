import React from 'react'
import {Link} from 'react-router-dom'

class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.question;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal);
        // debugger
        this.props.history.push('/questions');

    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }
    render() {
        // console.log(this.props.errors);

        return (
            <div className="question-form-container">


                <div className='x-background'>
                    <Link to="/questions"  className="close-x">X</Link>
                </div>

                <form className="create-form" onSubmit={this.handleSubmit}>
                    <div className="click-images">
                        <div className="mult-choice-image"></div>
                        <div className='survey-choice-image'></div>
                    </div>
                    <label>Title
                        <input className="title-input input" type="text" value={this.state.title} placeholder="Title" onChange={this.update('title')} />
                    </label>
                    <label>Kind
                        <select className="kind-input input" value={this.state.kind} onChange={this.update('kind')}>
                            <option name="Multiple Choice">mult_response</option>
                            <option name="Survey">text_response</option>
                        </select>
                        {/* <input type="text" value={this.state.kind} placeholder="Kind" onChange={this.update('kind')}/> */}
                    </label>
                    <label>Response_Limit
                    <input className="response-input input" type="number" value={this.state.response_limit} onChange={this.update('response_limit')} />
                    </label>
                    <div className="mult-choice-logo"></div>
                    <div className="survey-logo"></div>
                    <label className="closed-label">Closed?
                    <input className="closed-input" type="checkbox" value={this.state.closed} name="closed?" onChange={this.update('closed')} />
                    </label>
                    <label className="registered-label">Allow_Unregistered?
                    <input className="registered-input" type="checkbox" value={this.state.allow_unregistered} name="allow_unregistered?" onChange={this.update('allow_unregistered')} />
                    </label>
                    <ul className="create-errors">
                        {this.props.errors.map((error, i) => (
                            <li className="question-error-items" key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>
                <div className="create-button-container">
                <button className='create-button' onClick={this.handleSubmit}>Create</button>
                </div>
                </form>
            </div>
        )
    }
}


export default QuestionForm;

