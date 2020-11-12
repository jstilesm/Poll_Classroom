import * as APIUtil from "../util/api_util_visitor";

export const RECEIVE_CURRENT_VISITOR = "RECEIVE_VISITOR";
export const RECEIVE_VISITOR_ERRORS = "RECEIVE_VISITOR_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentVisitor = (visitor) => ({
  type: RECEIVE_CURRENT_VISITOR,
  visitor,
});

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_VISITOR_ERRORS,
    errors,
  };
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const login = (visitor) => (dispatch) => {
  return APIUtil.login(visitor).then(
    (visitor) => dispatch(receiveCurrentVisitor(visitor)),
    (er) => dispatch(receiveErrors(er.responseJSON))
  );
};
