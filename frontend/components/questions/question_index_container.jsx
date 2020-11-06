import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import {
  deleteQuestion,
  updateQuestion,
  requestQuestion,
} from "../../actions/question_actions";
import { requestGroups } from "../../actions/group_actions";
import { openModal } from "../../actions/modal_actions";
import { update } from "../../util/api_util_session";

const mSTP = (state, ownProps) => {
  // debugger
  return {
    groups: Object.values(state.entities.groups),
  };
};

const mDTP = (dispatch) => {
  return {
    requestGroups: () => dispatch(requestGroups()),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    requestQuestion: (question) => dispatch(requestQuestion(question)),
    openModal: () => dispatch(openModal("Add Question")),
  };
};

export default connect(mSTP, mDTP)(QuestionIndex);
