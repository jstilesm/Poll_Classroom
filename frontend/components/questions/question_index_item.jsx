import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: this.props.question.closed };
    this.update = this.update.bind(this);
  }

  update() {
    console.log(!this.state.status);

    this.setState({ status: !this.state.status });
    console.log(this.state);
  }

  render() {
    console.log(this.props.question);
    let status;
    if (!this.state.status) {
      status = "Deactivate";
      return (
        <>
          <div className="question-item-green">
            <div className="index-leftside">
              {this.props.question.kind === "mult_response" ? (
                <div className="mult_choice"></div>
              ) : (
                <i className="text fas fa-align-left"></i>
              )}
              <Link
                className="question-title"
                to={`/questions/${this.props.question.id}/edit`}
              >
                {this.props.question.title}
              </Link>
            </div>
            <div className="index-rightside">
              <div className="activated-group">
                <a className="deactivated-image" onClick={this.update}></a>
                <a className="activated" onClick={this.update}>
                  {status}
                </a>
              </div>
              <Dropdown
                question={this.props.question}
                deleteQuestion={this.props.deleteQuestion}
              />
            </div>
          </div>
        </>
      );
    } else {
      status = "Activate";
      return (
        <>
          <div className="question-item">
            <div className="index-leftside">
              {this.props.question.kind === "mult_response" ? (
                <div className="mult_choice"></div>
              ) : (
                <i className="text fas fa-align-left"></i>
              )}
              {/* <a>{this.props.question.title}</a> */}
              <Link
                className="question-title"
                to={`/questions/${this.props.question.id}`}
              >
                {this.props.question.title}
              </Link>
            </div>
            <div className="index-rightside">
              <div className="activated-group">
                <a className="activated-image" onClick={this.update}></a>
                <a className="activated" onClick={this.update}>
                  {status}
                </a>
              </div>
              <Dropdown
                question={this.props.question}
                deleteQuestion={this.props.deleteQuestion}
              />
            </div>
          </div>
        </>
      );
    }
  }
}

export default QuestionIndexItem;
