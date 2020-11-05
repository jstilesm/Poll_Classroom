import { connect } from "react-redux";
import Answers from "./answers";
// import { requestQuestionoption } from "../../actions/question_options_actions";
// import { requestQuestion } from "../../actions/question_actions";
// import { requestMultresponse } from "../../actions/mult_response_actions";
// import { login, clearErrors } from "../../actions/session_actions";
import { requestGroup } from "../../actions/group_actions";
import { createMultresponse } from "../../actions/mult_response_actions";

const mSTP = (state, ownProps) => {
  // debugger
  return {
    group: state.entities.groups[ownProps.match.params.group_id],
  };
};

const mDTP = (dispatch) => {
  return {
    requestGroup: (group) => dispatch(requestGroup(group)),
    createMultresponse: (mult_response) =>
      dispatch(createMultresponse(mult_response)),
  };
};

export default connect(mSTP, mDTP)(Answers);
