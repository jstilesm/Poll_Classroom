import { connect } from "react-redux";
import PollShow from "./poll_show";

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
