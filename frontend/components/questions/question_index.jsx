import React from "react";
import { Link } from "react-router-dom";
import QuestionIndexItem from "./question_index_item";
import Button from "../buttons/button";
import GroupDropdown from "../dropdown/dropdown-group";

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderGroup = this.renderGroup.bind(this);
    this.state = {
      hidden: false,
    };
    this.update = this.update.bind(this);
  }
  componentDidMount() {
    // debugger

    this.props.requestGroups();
    // console.log(this.props);
    // debugger
  }

  update(e) {
    e.preventDefault();
    if (!this.state.hidden) {
      this.setState({ hidden: true });
    } else {
      this.setState({ hidden: false });
    }
  }

  renderGroup(group) {
    let hideClass = "";
    if (this.state.hidden) {
      hideClass = " hide-items";
    }
    return (
      <div>
        <div className={"group-dropdown" + hideClass}>
          <h1 className="group-title" onClick={(e) => this.update(e)}>
            <div>
              <div className="group-header">
                <span className="arrow-collapsible"></span>
                {group.name}
                <div className="group-activities">
                  <GroupDropdown
                    group={this.props.group}
                    deleteGroup={this.props.deleteGroup}
                  />
                  {group.questions.length} activities
                </div>
              </div>
            </div>
          </h1>
          <div className="group-dropdown-question">
            {group.questions.map((question) => (
              <QuestionIndexItem
                key={question.id}
                question={question}
                deleteQuestion={this.props.deleteQuestion}
                updateQuestion={this.props.updateQuestion}
                requestQuestion={this.props.requestQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <>
        <div className="toprightbuttons">
          <Button blue={true} medium={true} centered={true} to="/questions/new">
            Create
          </Button>
          <Button whiteSpecial={true} medium={true} centered={true}>
            Import
          </Button>
          <div className="greybar"></div>
          <Button listButton={true}>Activities</Button>
          <Button listButton={true}>Trash</Button>
        </div>
        <div className="show-header">
          Your current plan allows you to post as much as you want. So there is
          no need to upgrade.
        </div>
        <div className="show-title">Activated and pinned activities</div>
        <div className="main-index-page">
          <div className="group-buttons">
            <Button onClick={this.props.openModal} whiteGrey={true}>
              New Group
            </Button>
          </div>

          {/* <Link to="/questions/new">New Question</Link> */}
          <ul className="questions-box">
            {this.props.groups.map(this.renderGroup)}
          </ul>
        </div>
      </>
    );
  }
}

export default QuestionIndex;
