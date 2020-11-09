import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.question);
    this.state = { closed: "" };
    // this.state = { status: this.props.question };
    this.activated = this.activated.bind(this);
    this.renderQuestionOptions = this.renderQuestionOptions.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }
  componentDidMount() {
    // debugger
    let number = this.props.match.params.questionId;
    this.props.requestQuestion(number);
  }

  update() {
    this.setState({ status: !this.state.status });
  }

  renderQuestionOptions(question) {
    if (question.kind === "mult_response") {
      return question.question_options.map((question_option) => (
        <div className="options-show-page">{question_option.label}</div>
      ));
    }
  }

  toggleActive() {
    // console.log(this.state);
    console.log(this.props.question);

    this.props.question.closed = !this.props.question.closed;
    this.props.updateQuestion(this.props.question).then(() => {
      this.setState({ closed: !this.props.question.closed });
    });
  }

  renderQuestion() {
    // console.log(this.props.question);
    let question = this.props.question;
    if (question !== undefined) {
      return (
        <div className="poll-question">
          {this.renderQuestionOptions(question)}
        </div>
      );
    }
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
    let number = this.props.match.params.questionId;
    const question = this.props.question;
    if (this.props.question != undefined) {
      // this.setState({ closed: this.props.question.closed });
      // console.log(this.state);
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
                <div className="show-page-title">
                  {this.props.question.title}
                </div>
                <div>{this.renderQuestion()}</div>
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
    }

    // if (!isNaN(number)) {
    //     // debugger
    //     console.log(number);
    // } else {
    //     console.log("nowork");
    // }
    // debugger

    return (
      <div className="show-page">
        {/* <h1>Title</h1>
                <h1>{this.props.question.title}</h1>
                <h3>{this.props.question.kind}</h3>
                <p>{this.props.question.closed}</p>
                <p>{this.props.question.allow_unregistered}</p>
                <p>{this.props.question.response_limit}</p> */}
        <div className="grey-box"></div>
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
  }
}

export default QuestionShow;
