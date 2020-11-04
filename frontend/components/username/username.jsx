import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   componentDidMount() {
  //     // debugger
  //     this.props.requestQuestion(questionId);
  //     // debugger
  //   }
  handleSubmit(e) {
    e.preventDefault();
    const { username, group_id } = this.props.match.params;
    this.props.history.push(`/poll/${username}/${group_id}`);
  }
  render() {
    const { username } = this.props.match.params;
    return (
      <div className="username-page">
        <form onSubmit={this.handleSubmit} className="username-form-box">
          <h1 className="username-title">
            Welcome to {username}'s Presentation
          </h1>
          <p className="username-paragraph-title"> Introduce yourself</p>
          <p className="username-paragraph">
            Enter the screen name you would like to appear alongside your
            responses.
          </p>
          <label className="link">
            <input
              className="link-input"
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <Button blue={true} large={true}>
            Continue
          </Button>
          {/* if skip is selected generate a visitior */}
          <p className="skip">Skip</p>
          <p className="subtext">
            Using a screen name allows the presenter and other participants to
            attach your screen name to your responses. You can change your
            screen name at any time.
          </p>
        </form>
      </div>
    );

    // <div>{this.props.question}</div>
    // <p>{this.props.question_options}</p>

    //
  }
}

export default Username;
