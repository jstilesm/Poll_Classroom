import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class BlackBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-box-black-container">
        <form {...this.props} className="form-box-black">
          <h1 className="join-title">{this.props.title}</h1>
          <div className="join-subtitle">{this.props.subtitle}</div>
          {this.props.children}
        </form>
      </div>
    );
  }
}

export default BlackBox;
