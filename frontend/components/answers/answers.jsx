import React from "react";
import AnswersGroup from "./answers_group";
import Button from "../buttons/button";

class Username extends React.Component {
  constructor(props) {
    super(props);

    this.renderGroup = this.renderGroup.bind(this);
  }
  componentDidMount() {
    this.props.requestGroup(this.props.match.params.group_id);
  }

  renderGroup() {
    if (this.props.group !== undefined) {
      return (
        <AnswersGroup
          group={this.props.group}
          createMultresponse={this.props.createMultresponse}
        />
      );
    }
  }

  render() {
    return (
      <div className="poll-page">
        <div className="answers">{this.renderGroup()}</div>
      </div>
    );
  }
}

export default Username;
