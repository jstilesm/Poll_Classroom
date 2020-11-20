import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/button";

class GroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.group;
    // console.log(this.props.currentUser);

    // console.log(this.props);
    // console.log(this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateName = this.updateName.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ user_id: this.props.currentUser.id });
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  updateName() {
    // this.setState({ user_id: this.props.currentUser.id });
    return (e) => {
      let name = this.state.name;
      name = e.currentTarget.value;
      this.setState({ name });
    };
  }
  render() {
    console.log(this.state);
    return (
      <div className="group-create-modal">
        <div className="group-create-modal-title">Create empty group</div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="group-input-form"
            type="text"
            value={this.state.name}
            onChange={this.updateName()}
            placeholder="Group name"
          />
          <div className="group-input-buttons">
            <Button whiteGrey={true} onClick={this.props.closeModal}>
              Cancel
            </Button>
            <Button blue={true} onClick={this.handleSubmit}>
              Create Group
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default GroupForm;
