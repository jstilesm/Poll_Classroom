import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.question;
    this.state.kind = "mult_response";
    // this.state.groups = [];

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderQuestionForm = this.renderQuestionForm.bind(this);
    this.renderQuestionOptions = this.renderQuestionOptions.bind(this);
    this.updateQuestionOption = this.updateQuestionOption.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.props.requestGroups().then((e) => {
      this.setState({ group_id: e.groups[0].id });
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then((e) => {
      this.props.history.push(`/questions/${e.question.id}`);
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  updateQuestionOption(idx, field) {
    return (e) => {
      let question_options = this.state.question_options;
      question_options[idx][field] = e.currentTarget.value;
      this.setState({ question_options });
    };
  }

  buttonClick(e) {
    e.preventDefault;
    if (this.state.kind === "mult_response") {
      this.setState({ kind: "text_response" });
    } else {
      this.setState({ kind: "mult_response" });
    }
    // console.log(this.state);
  }

  // foo = {far: 1}
  // foo["far"]
  // foo.far

  renderErrors() {
    if (this.props.errors !== undefined) {
      return (
        <ul className="create-errors">
          {this.props.errors.map((error, i) => (
            <li className="create-question-error-items" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }

  renderQuestionOptions(options) {
    if (options === true) {
      return (
        <>
          <label>
            Question Option 1
            <input
              className="title-input input"
              type="text"
              value={this.state.question_options[0].label}
              placeholder="Text"
              onChange={this.updateQuestionOption(0, "label")}
            />
          </label>
          <label>
            Question Option 2
            <input
              className="title-input input"
              type="text"
              value={this.state.question_options[1].label}
              placeholder="Text"
              onChange={this.updateQuestionOption(1, "label")}
            />
          </label>
          {/* <Button whiteSpecial={true}>Add Option</Button> */}
        </>
      );
    } else {
      return null;
    }
  }

  renderQuestionForm() {
    // this.props.requestGroups();
    // console.log(this.props.groups);
    let multlogo;
    let surveylogo;
    let subtext;
    let options;
    if (this.state.kind === "mult_response") {
      multlogo = "mult-choice-image";
      surveylogo = "grey-survey-choice-image";
      subtext =
        "Ask a question and let participants choose from a list of answers.";
      options = true;
    } else {
      multlogo = "grey-mult-choice-image";
      surveylogo = "survey-choice-image";
      subtext =
        "Ask a question and let participants type in a free-form answer.";
      options = false;
    }

    return (
      <form className="create-form" onSubmit={this.handleSubmit}>
        <div className="click-images">
          <div
            className={`${multlogo}`}
            onClick={(e) => this.buttonClick(e)}
          ></div>
          <div
            className={`${surveylogo}`}
            onClick={(e) => this.buttonClick(e)}
          ></div>
        </div>
        <div className="creation-subtext">{subtext}</div>
        <label>
          Title
          <input
            className="title-input input"
            type="text"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update("title")}
          />
        </label>
        {this.renderErrors()}
        {this.renderQuestionOptions(options)}
        <div className="select-group">Select Group</div>
        <div className="create-button-container">
          <select
            value={this.state.group_id}
            onChange={(e) => {
              this.setState({ group_id: parseInt(e.target.value) });
            }}
            className="group-create-dropdown"
            id="groups-list"
          >
            {this.props.groups.map((group, id) => {
              return (
                <option key={id} value={group.id}>
                  {group.name}
                </option>
              );
            })}
          </select>
          {/* <Button whiteSpecial={true} marginRight={true} to="/questions/new">
            Add another activity
          </Button> */}
          <Button blue={true} widePadding={true} onClick={this.handleSubmit}>
            Create
          </Button>
        </div>
      </form>
    );
  }
  render() {
    // console.log(this.state);

    return (
      <div className="question-form-container">
        <div className="x-background">
          <Link to="/questions" className="close-x">
            X
          </Link>
        </div>
        {this.renderQuestionForm()}
      </div>
    );
  }
}

export default QuestionForm;
