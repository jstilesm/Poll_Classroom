import React from "react";

import { Link } from "react-router-dom";
import QuestionIndexItem from "./question_index_item";
import Button from "../buttons/button";

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderGroup = this.renderGroup.bind(this);
  }
  componentDidMount() {
    // debugger
    this.props.requestGroups();
    // debugger
  }
  renderGroup(group) {
    // console.log(this.props);
    return (
      <>
        <h1>{group.name}</h1>
        {group.questions.map((question) => (
          <QuestionIndexItem
            key={question.id}
            question={question}
            deleteQuestion={this.props.deleteQuestion}
            updateQuestion={this.props.updateQuestion}
            requestQuestion={this.props.requestQuestion}
          />
        ))}
      </>
    );
  }
  render() {
    // debugger
    return (
      <>
        <div className="toprightbuttons">
          <Button blue={true} medium={true} centered={true} to="/questions/new">
            Create
          </Button>
          <Button whiteSpecial={true} medium={true} centered={true}>
            Import
          </Button>
          <div className="greybar"></div>
          <Button listButton={true}>Activities</Button>
          <Button listButton={true}>Trash</Button>
        </div>
        <div className="main-index-page">
          {/* <Link to="/questions/new">New Question</Link> */}
          <ul className="questions-box">
            {this.props.groups.map(this.renderGroup)}
          </ul>
        </div>
      </>
    );
  }
}

export default QuestionIndex;
