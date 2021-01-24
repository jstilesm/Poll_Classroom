import { connect } from "react-redux";
import QuestionIndex from "./question_index";
import {
  deleteQuestion,
  updateQuestion,
  requestQuestion,
} from "../../actions/question_actions";
import { requestGroups } from "../../actions/group_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { update } from "../../util/api_util_session";
import { createGroup, deleteGroup } from "../../actions/group_actions";

const mSTP = (state, ownProps) => {
  // console.log(state);
  // debugger
  return {
    group: {
      name: "",
    },
    currentUser: state.entities.users[state.session.id],
    groups: Object.values(state.entities.groups),
  };
};

const mDTP = (dispatch) => {
  return {
    createGroup: (group) => dispatch(createGroup(group)),
    deleteGroup: (groupId) => dispatch(deleteGroup(groupId)),
    requestGroups: () => dispatch(requestGroups()),
    updateQuestion: (question) => dispatch(updateQuestion(question)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
    requestQuestion: (question) => dispatch(requestQuestion(question)),
    openModal: () => dispatch(openModal("Add Group")),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(QuestionIndex);
