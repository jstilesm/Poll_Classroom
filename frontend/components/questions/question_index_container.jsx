import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { requestQuestions, deleteQuestion} from '../../actions/question_actions';
import {openModal} from '../../actions/modal_actions';



const mSTP = state => {
    // debugger
    return {
        questions: Object.values(state.entities.questions)
    };
};

const mDTP = dispatch => {
    return {
        requestQuestions: () => dispatch(requestQuestions()),
        deleteQuestion: questionId => dispatch(deleteQuestion(questionId)),
        openModal: () => dispatch(openModal("Add Question")),
    };
};

export default connect(mSTP, mDTP)(QuestionIndex);