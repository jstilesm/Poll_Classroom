import React from "react";
// import { Link } from "react-router-dom";
import ShowQuestion from "./questions_help_show";
// import Button from "../buttons/button";

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.question);
    this.renderQuestions = this.renderQuestions.bind(this);
  }
  componentDidMount() {
    // debugger
    let number = this.props.match.params.questionId;
    this.props.requestQuestion(number);
  }
  renderQuestions() {
    // debugger;
    if (
      this.props.question !== undefined &&
      this.props.question.responses !== undefined
    ) {
      return (
        <ShowQuestion
          question={this.props.question}
          updateQuestion={this.props.updateQuestion}
        />
      );
    }
  }

  render() {
    return (
      <div className="show-page">
        <div className="questions">{this.renderQuestions()}</div>
      </div>
    );
  }
}

export default QuestionShow;
