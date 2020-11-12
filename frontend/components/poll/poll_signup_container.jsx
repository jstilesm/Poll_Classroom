import { connect } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import PollSignup from "./poll_signup";
import { checkUser } from "../../util/api_util_session";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "log in",
  };
};
const mDTP = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(PollSignup);
