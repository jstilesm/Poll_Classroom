import { connect } from "react-redux";
import Username from "./username";
import { requestQuestionoption } from "../../actions/question_options_actions";
import { requestQuestion } from "../../actions/question_actions";
import { requestMultresponse } from "../../actions/mult_response_actions";
import { clearErrors } from "../../actions/session_actions";
import { login } from "../../actions/visitor_actions";

const mSTP = (state, ownProps) => {
  // debugger
  return {};
};

const mDTP = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    requestQuestion: (questionId) => dispatch(requestQuestion(questionId)),
    requestQuestionoption: (question_optionId) =>
      dispatch(requestQuestionoption(question_optionId)),
    requestMultresponse: (mult_responseId) =>
      dispatch(requestMultresponse(mult_responseId)),
    visitorLogin: (visitor) => dispatch(login(visitor)),
  };
};

export default connect(mSTP, mDTP)(Username);
