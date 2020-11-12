import React from "react";
// import { update } from '../../util/api_util_session';
import QuestionForm from "./question_form";
import { Link } from "react-router-dom";
import Button from "../buttons/button";
class EditQuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderQuestionOptions = this.renderQuestionOptions.bind(this);
    this.updateQuestionOption = this.updateQuestionOption.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    // console.log(this.props);
  }
  componentDidMount() {
    this.props.requestQuestion(this.props.match.params.questionId).then((e) => {
      this.setState({ question: e.question });
    });
  }

  handleSubmit(e) {
    // all the values we need are in this.state
    // first, we submit an update to the question itself, we'll need api.updateQuestion
    // then we submit an update for all question_options. we'll need api.updateQuestionOption
    // ???
    // profit!

    e.preventDefault();
    const question = { ...this.state.question };
    // console.log(question);
    question.question_options = [];
    const question_options = this.state.question.question_options;
    let array = [];

    for (let i = 0; i < question_options.length; i++) {
      array.push(this.props.updateQuestionoption(question_options[i]));
    }
    array.push(this.props.updateQuestion(question));

    $.when(...array).then(() => {
      this.props.history.push(`/questions/${question.id}`);
    });
  }

  update(field) {
    return (e) => {
      this.setState({
        question: { ...this.state.question, [field]: e.currentTarget.value },
      });
    };
  }

  updateQuestionOption(idx, field) {
    return (e) => {
      let question = this.state.question;
      question.question_options[idx][field] = e.currentTarget.value;
      this.setState({ question });
    };
  }

  renderQuestionOptions(question) {
    if (question.kind === "mult_response") {
      return question.question_options.map((question_option, idx) => (
        <div className="options-edit-page">
          <label>
            <input
              className="question-options-box"
              type="text"
              placeholder="Text"
              value={question_option.label}
              onChange={this.updateQuestionOption(idx, "label")}
            />
          </label>
        </div>
      ));
    }
  }

  renderQuestion() {
    let question = this.state.question;
    if (question !== undefined) {
      return (
        <div className="poll-question">
          {this.renderQuestionOptions(question)}
        </div>
      );
    }
  }

  render() {
    const { errors } = this.props;
    const question = this.state.question;
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
          <form id="my-form" className="edit-form">
            <h1 className="edit-header">Title</h1>
            <label className="title-label">
              <input
                className="edit-title-box"
                type="text"
                value={question.title}
                placeholder="Title"
                onChange={this.update("title")}
              />
            </label>
            <h2 className="edit-header">Question Options</h2>
            {this.renderQuestion()}
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
            <Button blue={true} oneHalf={true} onClick={this.handleSubmit}>
              Save
            </Button>
            <Button
              whiteGrey={true}
              oneHalf={true}
              to={`/questions/${question.id}`}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditQuestionForm;
