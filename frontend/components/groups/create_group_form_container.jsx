import { connect } from "react-redux";
import { createGroup } from "../../actions/group_actions";
import GroupForm from "./group_form";
import { clearErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mSTP = (state, errors, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    errors: errors.group,
    group: {
      name: "",
      user_id: 0,
    },
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (group) => dispatch(createGroup(group)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(GroupForm);
