import { connect } from "react-redux";
import { requestQuestion } from "../../actions/question_actions";
import QuestionShow from "./question_show";
import { requestMultresponse } from "../../actions/mult_response_actions";
import { updateQuestion } from "../../actions/question_actions";

const mSTP = (state, ownProps) => {
  // debugger
  return {
    question: state.entities.questions[ownProps.match.params.questionId],
  };
};

const mDTP = (dispatch) => {
  return {
    requestQuestion: (question) => dispatch(requestQuestion(question)),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    requestMultresponse: (mult_response) =>
      dispatch(requestMultresponse(mult_response)),
  };
};

export default connect(mSTP, mDTP)(QuestionShow);
