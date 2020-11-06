import * as APIUtil from "../util/api_util_question_option";

export const RECEIVE_QUESTION_OPTION = "RECEIVE_QUESTION_OPTION";
export const RECEIVE_QUESTION_OPTIONS = "RECEIVE_QUESTION_OPTIONS";

const receiveQuestionoptions = (question_options) => {
  return {
    type: RECEIVE_QUESTION_OPTIONS,
    question_options,
  };
};

const receiveQuestionoption = (question_option) => {
  return {
    type: RECEIVE_QUESTION_OPTION,
    question_option,
  };
};

export const requestQuestionoptions = () => (dispatch) => {
  return APIUtil.fetchQuestionoptions().then((question_options) =>
    dispatch(receiveQuestionoptions(question_options))
  );
};

export const requestQuestionoption = (question_optionId) => (dispatch) => {
  return APIUtil.fetchQuestionoption(
    question_optionId
  ).then((question_option) => dispatch(receiveQuestionoption(question_option)));
};

export const updateQuestionoption = (question_option) => (dispatch) => {
  return APIUtil.updateQuestionoption(question_option).then((question_option) =>
    dispatch(receiveQuestionoption(question_option))
  );
};
