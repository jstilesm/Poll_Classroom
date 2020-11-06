import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/dropdown";

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { closed: this.props.question.closed };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    // console.log(this.props);
    this.props.question.closed = !this.state.closed;
    // we chain a promise here because it's better for the user to see the change in
    // the ui once we get it back from the server.
    this.props.updateQuestion(this.props.question).then(() => {
      this.setState({ closed: !this.state.closed });
    });
  }

  render() {
    return (
      <>
        <div
          className={
            this.state.closed ? "question-item" : "question-item-green"
          }
        >
          <div className="index-leftside">
            {this.props.question.kind === "mult_response" ? (
              <div className="mult_choice"></div>
            ) : (
              <div className="mult_choices">
                <i className="text fas fa-align-left"></i>
              </div>
            )}
            <Link
              className="question-title"
              to={`/questions/${this.props.question.id}`}
            >
              {this.props.question.title}
            </Link>
          </div>
          <div className="index-rightside">
            <div className="activated-group">
              <a
                className={
                  this.state.closed ? "activated-image" : "deactivated-image"
                }
                onClick={this.toggleActive}
              ></a>
              <a className="activated" onClick={this.toggleActive}>
                {this.state.closed ? "Activate" : "Deactivate"}
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

export default QuestionIndexItem;
