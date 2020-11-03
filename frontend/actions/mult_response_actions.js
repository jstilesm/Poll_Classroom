import * as APIUtil from "../util/api_util_mult_response";

export const RECEIVE_MULT_RESPONSE = "RECEIVE_MULT_RESPONSE";
export const RECEIVE_MULT_RESPONSES = "RECEIVE_MULT_RESPONSES";

const receiveMultreponses = (mult_responses) => {
  return {
    type: RECEIVE_MULT_RESPONSES,
    mult_responses,
  };
};
const receiveMultreponse = (mult_response) => {
  return {
    type: RECEIVE_MULT_RESPONSE,
    mult_response,
  };
};

export const requestMultreponses = () => (dispatch) => {
  return APIUtil.fetchMultresponses().then((mult_responses) =>
    dispatch(receiveMultreponses(mult_responses))
  );
};

export const requestMultreponse = (mult_responseId) => (dispatch) => {
  return APIUtil.fetchMultresponse(mult_responseId).then((mult_response) =>
    dispatch(receiveMultreponse(mult_response))
  );
};
