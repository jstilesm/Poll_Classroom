import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class Answers extends React.Component {
  constructor(props) {
    super(props);
  }
  //   componentDidMount() {
  //     // debugger
  //     this.props.requestQuestion(questionId);
  //     // debugger
  //   }

  render() {
    return (
      <div className="answer-page">
        <form onSubmit={this.handleSubmit} className="answer-form-box">
          <h1 className="answer-title">Welcome to My Presentation</h1>
          <p className="answer-paragraph-title"> Introduce yourself</p>
          <p className="answer-paragraph">
            Enter the screen name you would like to appear alongside your
            responses.
          </p>
          <label className="link">
            <input
              className="link-input"
              type="text"
              //   value="/"
              placeholder="Name"
            />
          </label>
          <Button blue={true} large={true} to="username">
            Continue
          </Button>
          <p className="skip">Skip</p>
          <p className="subtext">
            Using a screen name allows the presenter and other participants to
            attach your screen name to your responses. You can change your
            screen name at any time.
          </p>
        </form>
      </div>
    );
  }
}

export default Answers;
