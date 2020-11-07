import React from "react";
import { Link } from "react-router-dom";
import { createMultresponse } from "../../actions/mult_response_actions";
import Button from "../buttons/button";

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: "",
      question_choices: {},
    };

    this.renderGroup = this.renderGroup.bind(this);
    this.renderQuestionBody = this.renderQuestionBody.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }
  componentDidMount() {
    this.props.requestGroup(this.props.match.params.group_id);
  }

  buttonClick(e, question, question_option) {
    e.preventDefault();

    const question_choices = this.state.question_choices;
    question_choices[question.id] = question_option.id;
    this.setState({ question_choices });

    createMultresponse({ question_options_id: question_option.id });
  }

  renderQuestionBody(question) {
    if (question.kind === "mult_response" && question.closed === false) {
      return question.question_options.map((question_option) => {
        const pressed = question.id in this.state.question_choices;
        const selected =
          this.state.question_choices[question.id] === question_option.id;
        return (
          <div className="buttons">
            <Button
              blue={selected}
              disabled={pressed}
              whiteGrey={!selected}
              extraLarge={true}
              value={question_option.label}
              onClick={(e) => this.buttonClick(e, question, question_option)}
            >
              {question_option.label}
            </Button>
          </div>
        );
      });
    } else if (question.closed === true) {
      return null;
    } else {
      return <textarea className="text-area"></textarea>;
    }
  }

  renderGroup() {
    let group = this.props.group;
    if (group != undefined) {
      let questions = group.questions;
      let array = [];
      for (let j = 0; j < questions.length; j++) {
        if (questions[j].closed === false) {
          array.push(questions[j]);
        }
      }
      return (
        <div className="poll-group">
          {array.map((question) => (
            <div className="poll-question">
              <label className="question-header">{question.title}</label>
              <small>
                {question.id in this.state.question_choices
                  ? "Response Recorded"
                  : "You can only respond once"}
              </small>
              {this.renderQuestionBody(question)}
            </div>
          ))}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="poll-page">
        <div className="answers">{this.renderGroup()}</div>
      </div>
    );
  }
}

export default Username;
