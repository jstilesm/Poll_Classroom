import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import Button from "../buttons/button";
import BlackBox from "../form-box/black-box";

class PollShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error_message: "",
      value: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    // debugger
    this.props.clearErrors();
  }

  // check if link is valid, if it is then redirects to the page, if not then shows errors

  handleSubmit(e) {
    this.setState({ error_message: "" });
    e.preventDefault();
    if (this.state.value.includes("/")) {
      this.props.history.push(`/poll/${this.state.value}/username`);
    } else {
      this.setState({ error_message: "Invalid Room" });
    }
  }

  errors() {
    if (this.state.error_message !== "") {
      return (
        <ul className="errors">
          <li className="error-items">{this.state.error_message}</li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="poll-page">
        <a href="/">
          <img
            className="PollEverywhere-blacklogo"
            src="https://davhizrhxzcu1.cloudfront.net/assets/media_kit/logo_white-b3ae877b0dff730405738e5ad768060f7d6d56b89a75f397012ca915f5472364.png"
          ></img>
        </a>

        <div className="grey-logo"></div>
        <BlackBox
          onSubmit={this.handleSubmit}
          title="Join Presentation"
          subtitle={
            <>
              Type the "username"/"group id" To view a users question group
              <br />
              <br />
              Ex: "tester/1"
            </>
          }
        >
          <p></p>
          <label className="link">
            <input
              className="link-input"
              type="text"
              value={this.state.value}
              placeholder=""
              onChange={(e) => this.setState({ value: e.target.value })}
            />
          </label>
          {this.errors()}
          <Button blue={true} largeb={true}>
            Join
          </Button>
        </BlackBox>
      </div>
    );
  }
}

export default PollShow;
