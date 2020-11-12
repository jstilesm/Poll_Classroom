import React from "react";
import { createMultresponse } from "../../actions/mult_response_actions";
import Button from "../buttons/button";

class AnswersGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: "",
      question_choices: {},
      textarea_content: {},
    };

    this.renderQuestionBody = this.renderQuestionBody.bind(this);
    this.buttonClick = this.buttonClick.bind(this);

    this.subscription = window.App.cable.subscriptions.create(
      { channel: "ResponseChannel", groupId: this.props.group.id },
      {
        received: (broadcast) => {
          console.log(JSON.parse(broadcast.data));
        },

        respond: function (response) {
          return this.perform("respond", response);
        },
      }
    );
  }
  buttonClick(e, question, question_option) {
    e.preventDefault();

    const question_choices = this.state.question_choices;
    question_choices[question.id] = question_option.id;
    this.setState({ question_choices });

    this.subscription.respond({
      question_options_id: question_option.id,
      question_id: question.id,
      body: "", // TODO: add the real body
    });
    // this.props.createMultresponse({ question_options_id: question_option.id });
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
      let value = this.state.textarea_content[question.id];
      let buttonShouldBeBlue = value !== undefined && value !== "";
      return (
        <>
          <textarea
            placeholder="Enter a response"
            className="text-area"
            value={value}
            onChange={(e) => {
              this.state.textarea_content[question.id] = e.currentTarget.value;
              this.setState({ textarea_content: this.state.textarea_content });
            }}
          ></textarea>
          <div className="text-submit">
            <Button
              whiteGrey={!buttonShouldBeBlue}
              blue={buttonShouldBeBlue}
              extraLarge={true}
              centered={true}
            >
              Submit
            </Button>
          </div>
        </>
      );
    }
  }
  render() {
    let questions = this.props.group.questions;
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

export default AnswersGroup;
