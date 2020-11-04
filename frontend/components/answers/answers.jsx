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
  render() {
    console.log(this.props);
    return (
      <div className="answers-page">
        <h1>Hello</h1>

        {JSON.stringify(this.props.group)}
      </div>
    );

    // <div>{this.props.question}</div>
    // <p>{this.props.question_options}</p>

    //
  }
}

export default Username;
