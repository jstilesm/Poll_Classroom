import { connect } from "react-redux";
import { createQuestion } from "../../actions/question_actions";
import QuestionForm from "./question_form";
import { clearErrors } from "../../actions/session_actions";
import { requestGroups } from "../../actions/group_actions";

const mSTP = (state, errors, ownProps) => {
  // console.log(this.state);
  // debugger
  return {
    // currentUser: state.entities.users[state.session.id],
    errors: errors.question,
    question: {
      title: "",
      kind: "mult_response",
      response_limit: 1,
      closed: false,
      allow_unregistered: false,
      question_options: [{ label: "" }, { label: "" }],
      group_id: 0,
    },
    groups: Object.values(state.entities.groups),
  };
};

const mDTP = (dispatch) => {
  return {
    requestGroups: () => dispatch(requestGroups()),
    processForm: (question) => dispatch(createQuestion(question)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(QuestionForm);
