import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class QuestionShow extends React.Component {
  componentDidMount() {
    // debugger
    let number = this.props.match.params.questionId;
    this.props.requestQuestion(number);
  }

  render() {
    console.log(this.props.question);
    // debugger
    let number = this.props.match.params.questionId;
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
            <Button whiteGrey={true} oneThird={true}>
              Activate
            </Button>
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
