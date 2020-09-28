import * as APIUtil from '../util/api_util_question'


// export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";


// const receiveQuestions = questions => {
//     return {
//         type: RECEIVE_QUESTIONS,
//         questions
//     };
// };

const receiveQuestion = question => {
    return {
        type: RECEIVE_QUESTION,
        question
    };

};

const removeQuestion = questionId => {
    return {
        type: REMOVE_QUESTION,
        questionId
    };
};


/*

1. `requestQuestion(questionId)`
2. `createQuestion(question)`
3. `updateQuestion(question)`
4. `deleteQuestion(questionId)`

5. requestQuestions
*/


export const requestQuestion = (questionId) => dispatch => {
    return APIUtil.fetchQuestion(questionId)
    .then(question => dispatch(receiveQuestion(question)));
};

export const createQuestion = (question) => dispatch => {
    return APIUtil.createQuestion(question)
    .then(question => dispatch(receiveQuestion(question)));
};

export const updateQuestion = (question) => dispatch => {
    return APIUtil.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)));
};

export const deleteQuestion = (questionId) => dispatch => {
    return APIUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)));
};

