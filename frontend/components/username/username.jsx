import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";
import BlackBox from "../form-box/black-box";

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, group_id } = this.props.match.params;
    this.props
      .visitorLogin({ username: this.state.name })
      .then(() => {
        this.props.history.push(`/poll/${username}/${group_id}`);
      })
      .fail((e) => {
        alert("yusuck");
      });
  }
  render() {
    const { username } = this.props.match.params;

    return (
      <div className="poll-page">
        <BlackBox
          onSubmit={this.handleSubmit}
          title={`Welcome to ${username}'s Presentation`}
          subtitle={
            <>
              <p> Introduce yourself</p>
              <p>
                Enter the screen name you would like to appear alongside your
                responses.
              </p>
            </>
          }
        >
          <label className="link">
            <input
              className="link-input"
              type="text"
              value={this.state.name}
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </label>
          <div className="link-join-button">
            <Button blue={true} largey={true}>
              Continue
            </Button>
          </div>

          {/* if skip is selected generate a visitior */}
          {/* <p className="skip">Skip</p> */}
          <p className="subtext">
            Using a screen name allows the presenter and other participants to
            attach your screen name to your responses.
          </p>
        </BlackBox>
      </div>
    );

    // <div>{this.props.question}</div>
    // <p>{this.props.question_options}</p>

    //
  }
}

export default Username;
