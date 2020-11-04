import { connect } from "react-redux";
import PollShow from "./poll_show";
import { login, clearErrors } from "../../actions/session_actions";

const mSTP = (state, ownProps) => {
  // debugger
  return {};
};

const mDTP = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(PollShow);
