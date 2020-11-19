import { connect } from "react-redux";
import { createQuestion } from "../../actions/question_actions";
import QuestionForm from "./question_form";
import { clearErrors } from "../../actions/session_actions";

const mSTP = ({ state, errors, ownProps }) => {
  // debugger
  return {
    errors: errors.question,
    question: {
      title: "",
      kind: "mult_response",
      response_limit: 1,
      closed: false,
      allow_unregistered: false,
      question_options: [{ label: "" }, { label: "" }],
      group_id: 0,
      groups: Object.values(state.entities.groups),
    },
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (question) => dispatch(createQuestion(question)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(QuestionForm);
