import React from "react";
import { Link } from "react-router-dom";

import Button from "../buttons/button";

class ShowQuestion extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.question);

    this.state = {
      closed: "",
      text_answers: [],
      question_choices: {},
    };

    this.props.question.responses.map((response) => {
      console.log(response, this.state);
      const question_options_id = response.question_options_id;
      if (question_options_id === null) {
        this.state.text_answers.push(response.body);
      } else {
        if (this.state.question_choices[question_options_id] === undefined) {
          this.state.question_choices[question_options_id] = 0;
        }
        this.state.question_choices[question_options_id] += 1;
      }
    });
    console.log(this.state);
    this.activated = this.activated.bind(this);
    this.renderQuestionOptions = this.renderQuestionOptions.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    let that = this;
    this.subscription = window.App.cable.subscriptions.create(
      { channel: "ResponseChannel", groupId: this.props.question.group_id },
      {
        received: (broadcast) => {
          if (this.props.question.kind === "text_response") {
            const text_answers = this.state.text_answers;

            let body = JSON.parse(broadcast.data).body;
            text_answers.push(body);

            that.setState({ text_answers });
          } else {
            const question_choices = this.state.question_choices; // {}

            let question_options_id = JSON.parse(broadcast.data)
              .question_options_id;
            if (question_choices[question_options_id] === undefined) {
              question_choices[question_options_id] = 0;
            }
            question_choices[question_options_id] += 1;
            // console.log(question_choices[question_options_id]);
            that.setState({ question_choices });
          }
        },
      }
    );
  }

  update() {
    this.setState({ status: !this.state.status });
  }

  renderQuestionOptions(question) {
    let width = 0;
    let question_hash = this.state.question_choices;
    if (question.kind === "mult_response") {
      let sum = 0;
      for (let i in question_hash) {
        sum += parseFloat(question_hash[i]);
      }

      // sum up all the counts from all the question_choices
      // loop over this.state.question_choices

      return question.question_options.map((question_option) => {
        let question_hash = this.state.question_choices;

        let part = question_hash[question_option.id];

        let percentage = Math.floor((part / sum) * 100);
        // console.log(percentage);
        width = Math.floor((percentage / 100) * 500);
        if (isNaN(width)) {
          width = 0;
          return (
            <div className="question-answercontainer">
              <div className="options-show-page">{question_option.label}</div>
              <div className="bluebar-show" style={{ display: "none" }}></div>
            </div>
          );
        } else {
          return (
            <div className="question-answercontainer">
              <div className="options-show-page">{question_option.label}</div>
              <div className="bluebar-show" style={{ width: `${width}px` }}>
                {width / 5}%
              </div>
            </div>
          );
        }
      });
    } else {
      return this.state.text_answers.map((text_answer) => {
        return (
          <>
            <div className="text-answers">- {text_answer}</div>
          </>
        );
      });
    }
  }

  toggleActive() {
    // console.log(this.state);
    // console.log(this.props.question);

    this.props.question.closed = !this.props.question.closed;
    this.props.updateQuestion(this.props.question).then(() => {
      this.setState({ closed: !this.props.question.closed });
    });
  }

  renderQuestion() {
    let number = this.props.question.id;
    // let data;
    // // console.log(this.props.question);
    // Object.keys(this.state.text_answers).forEach(function (object_id) {
    //   if (number === object_id) {
    //     console.log("hi");
    //     data = this.state.text_answers[object_id];
    //   }
    // });
    // console.log(data);
    let question = this.props.question;
    return (
      <div className="poll-question">
        {this.renderQuestionOptions(question)}
      </div>
    );
  }

  activated(e) {
    if (
      (this.props.question != undefined && this.props.question.closed) == true
    ) {
      return (
        <Button whiteGrey={true} oneThird={true} onClick={this.toggleActive}>
          Activate
        </Button>
      );
    } else {
      return (
        <Button whiteGrey={true} oneThird={true} onClick={this.toggleActive}>
          Deactivate
        </Button>
      );
    }
  }
  render() {
    let number = this.props.question.id;

    return (
      <div className="show-page">
        {/* <h1>Title</h1>
                <h1>{this.props.question.title}</h1>
                <h3>{this.props.question.kind}</h3>
                <p>{this.props.question.closed}</p>
                <p>{this.props.question.allow_unregistered}</p>
                <p>{this.props.question.response_limit}</p> */}
        <div className="white-small-box">
          <div className="edit-box">
            <div className="top-grey">Respond at</div>
            <div className="white-show-box">
              <div className="show-page-title">{this.props.question.title}</div>
              <div>{this.renderQuestion()}</div>
              <div></div>
            </div>
            <div className="bottom-logo"></div>
          </div>
        </div>

        {/* <Link to="/">Link</Link> */}
        <div className="white-box">
          <div className="button-box">
            <Button
              blue={true}
              oneThird={true}
              to={`/questions/${number}/edit`}
            >
              Edit
            </Button>
            {this.activated()}
            <Button whiteGrey={true} oneThird={true} to="/questions/">
              Back
            </Button>
          </div>
        </div>
      </div>
    );
    // if (!isNaN(number)) {
    //     // debugger
    //     console.log(number);
    // } else {
    //     console.log("nowork");
    // }
    // debugger
  }
}

export default ShowQuestion;
