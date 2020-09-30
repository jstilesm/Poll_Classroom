import { CLEAR_ERRORS, RECEIVE_QUESTION_ERRORS } from '../actions/question_actions';



const questionErrorsReducer = (state = [], action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_QUESTION_ERRORS:
            // debugger
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default questionErrorsReducer;