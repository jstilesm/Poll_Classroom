import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class ConnectorBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    this.preventDefault();
  }

  render() {
    return (
      <div className="signup-alt-form">
        <div className="box-one">
          <div className="box-one-content">
            <h2 className="alt-header1">Present with Poll Everywhere</h2>
            <h4 className="alt-subheader">
              Create your account and start presenting today
            </h4>
            <Button
              white={true}
              medium={true}
              bold={true}
              flexed={true}
              to="/signup"
            >
              I'm a presenter
            </Button>
          </div>
          <img
            className="alt-image"
            src="https://davhizrhxzcu1.cloudfront.net/assets/onboarding/presentation-f47167fb73a2c64fe366d6fb79f5b29bea70ff9601713288ba43b99bbca21aca.svg"
            alt=""
          />
        </div>
        <div className="box-two">
          <div className="box-two-content">
            <h2 className="alt-header2">Participate in a presentation</h2>
            <Button
              blue={true}
              medium={true}
              bold={true}
              flexed={true}
              to="/poll"
            >
              I'm a participant
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConnectorBar;
