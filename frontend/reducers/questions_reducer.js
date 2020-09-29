import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION} from '../actions/question_actions'



const QuestionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_QUESTIONS: 
            return action.questions;
        case RECEIVE_QUESTION:
            // debugger
            nextState[action.question.id] = action.question;
            return nextState;
        case REMOVE_QUESTION:
            delete nextState[action.questionId];
            return nextState;
        default:
            return state;
    }
};

export default QuestionsReducer;