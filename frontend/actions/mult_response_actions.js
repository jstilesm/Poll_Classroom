import * as APIUtil from "../util/api_util_mult_response";

export const RECEIVE_MULT_RESPONSE = "RECEIVE_MULT_RESPONSE";
export const RECEIVE_MULT_RESPONSES = "RECEIVE_MULT_RESPONSES";

const receiveMultresponses = (mult_responses) => {
  return {
    type: RECEIVE_MULT_RESPONSES,
    mult_responses,
  };
};
const receiveMultresponse = (mult_response) => {
  return {
    type: RECEIVE_MULT_RESPONSE,
    mult_response,
  };
};

export const requestMultreponses = () => (dispatch) => {
  return APIUtil.fetchMultresponses().then((mult_responses) =>
    dispatch(receiveMultresponses(mult_responses))
  );
};

export const requestMultresponse = (mult_responseId) => (dispatch) => {
  return APIUtil.fetchMultresponse(mult_responseId).then((mult_response) =>
    dispatch(receiveMultresponse(mult_response))
  );
};

export const createMultresponse = (mult_response) => (dispatch) => {
  return APIUtil.createMultresponse(mult_response).then((mult_response) =>
    dispatch(receiveMultresponse(mult_response))
  );
};
