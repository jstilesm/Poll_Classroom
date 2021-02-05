import React from "react";
import { Link } from "react-router-dom";

class GroupDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.whenBlur = this.whenBlur.bind(this);
    this.whenFocus = this.whenFocus.bind(this);
  }
  whenClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  whenBlur(e) {
    e.preventDefault();

    if (e.type !== "focus") {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }

  whenFocus(e) {
    e.preventDefault();

    console.log("when focus", e.type);
    if (e.type === "focus") {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }
  render() {
    return (
      <div>
        <button
          className="threedots"
          onClick={this.whenClick}
          onFocus={this.whenFocus}
          onBlur={this.whenBlur}
        >
          <i className="actions fas fa-ellipsis-v">Actions</i>
          {this.state.show ? (
            <ul onClick={(e) => console.log(e)}>
              <div className="options-box">
                <li
                  className="delete-icon"
                  onClick={() => this.props.deleteGroup(this.props.group.id)}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>Delete
                </li>
              </div>
            </ul>
          ) : null}
        </button>
      </div>
    );
  }
}

export default GroupDropdown;
