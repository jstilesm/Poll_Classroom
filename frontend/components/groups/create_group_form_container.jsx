import { connect } from "react-redux";
import { createGroup } from "../../actions/group_actions";
import GroupForm from "./group_form";
import { clearErrors } from "../../actions/session_actions";

const mSTP = ({ state, errors, ownProps }) => {
  // debugger
  return {
    errors: errors.question,
    question: {
      name: "",
      user_id: 0,
    },
  };
};

const mDTP = (dispatch) => {
  return {
    processForm: (group) => dispatch(createGroup(group)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(GroupForm);
