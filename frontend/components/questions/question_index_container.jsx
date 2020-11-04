import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import { deleteQuestion } from "../../actions/question_actions";
import { requestGroups } from "../../actions/group_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => {
  // debugger
  return {
    groups: Object.values(state.entities.groups),
  };
};

const mDTP = (dispatch) => {
  return {
    requestGroups: () => dispatch(requestGroups()),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    openModal: () => dispatch(openModal("Add Question")),
  };
};

export default connect(mSTP, mDTP)(QuestionIndex);
