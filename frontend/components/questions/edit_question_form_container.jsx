import { connect } from "react-redux";
import {
  updateQuestion,
  requestQuestion,
} from "../../actions/question_actions";
import { clearErrors } from "../../actions/session_actions";
import EditQuestionForm from "./edit_question_form";
import { updateQuestionoption } from "../../actions/question_options_actions";

const mSTP = (state, ownProps) => {
  // debugger
  //   console.log(state.entities);
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    formType: "Update Question",
    errors: state.errors.question,
  };
};

const mDTP = (dispatch) => {
  return {
    action: (question) => dispatch(updateQuestion(question)),
    requestQuestion: (question) => dispatch(requestQuestion(question)),
    updateQuestionoption: (question_option) =>
      dispatch(updateQuestionoption(question_option)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(EditQuestionForm);
