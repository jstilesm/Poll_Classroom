import * as APIUtil from "../util/api_util_text_response";

export const RECEIVE_TEXT_RESPONSE = "RECEIVE_TEXT_RESPONSE";
export const RECEIVE_TEXT_RESPONSES = "RECEIVE_TEXT_RESPONSES";

const receiveTextresponses = (text_responses) => {
  return {
    type: RECEIVE_TEXT_RESPONSES,
    text_responses,
  };
};
const receiveTextresponse = (text_response) => {
  return {
    type: RECEIVE_TEXT_RESPONSE,
    text_response,
  };
};

export const requestTextresponses = () => (dispatch) => {
  return APIUtil.fetchTextresponses().then((text_responses) =>
    dispatch(receiveTextresponses(text_responses))
  );
};

export const requestTextresponse = (text_responseId) => (dispatch) => {
  return APIUtil.fetchTextresponse(text_responseId).then((text_response) =>
    dispatch(receiveTextresponse(text_response))
  );
};

export const createTextresponse = (text_response) => (dispatch) => {
  return APIUtil.createTextresponse(text_response).then((text_response) =>
    dispatch(receiveTextresponse(text_response))
  );
};
