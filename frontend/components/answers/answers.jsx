import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: "",
    };
    // this.handleSubmit = thi,.handleSubmit.bind(this);
    this.renderTextBoxes = this.renderTextBoxes.bind(this);
    this.renderQuestionOptions = this.renderQuestionOptions.bind(this);
  }
  componentDidMount() {
    // debugger

    this.props.requestGroup(this.props.match.params.group_id);
    // debugger
  }
  //   handleSubmit(e) {
  //     e.preventDefault();
  //     this.props.history.push(`/poll/${this.state.value}`);
  //   }

  renderTextBoxes() {
    // this.props.polls.group.questions
  }

  renderQuestionOptions() {
    let title = this.props.group;

    if (title != undefined) {
      console.log(title["questions"][1]["question_options"]);
      let questions = title["questions"];

      // let questions = title["questions"];
      // return (
      //   <ul className="question-options">
      //     {questions.map((question, i) => (
      //       <li className="question-options" key={`question-${i}`}>
      //         {question}
      //       </li>
      //     ))}
      //   </ul>
      // );
    }
  }

  render() {
    console.log(this.props.group);

    return (
      <div className="poll-page">
        <div className="answers"></div>
        {JSON.stringify(this.props.group)}
        {this.renderTextBoxes()}
        {this.renderQuestionOptions()}
      </div>
    );

    // <div>{this.props.question}</div>
    // <p>{this.props.question_options}</p>

    //
  }
}

export default Username;
