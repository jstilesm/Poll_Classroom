import { connect } from "react-redux";
import {
  updateQuestion,
  requestQuestion,
} from "../../actions/question_actions";
import EditQuestionForm from "./edit_question_form";
import { requestQuestionoptions } from "../../actions/question_options_actions";

const mSTP = (state, ownProps) => {
  // debugger
  console.log(state.entities);
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
    question_options:
      state.entities.questionoption[ownProps.match.params.question_optionsId],
    formType: "Update Question",
    errors: state.errors.question,
  };
};

const mDTP = (dispatch) => {
  return {
    action: (question) => dispatch(updateQuestion(question)),
    requestQuestion: (question) => dispatch(requestQuestion(question)),
    requestQuestionoptions: (question_options) =>
      dispatch(requestQuestionoptions(question_options)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(EditQuestionForm);
