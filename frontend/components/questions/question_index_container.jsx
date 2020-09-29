import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { requestQuestions, deleteQuestion} from '../../actions/question_actions';



const mSTP = state => {
    // debugger
    return {
        questions: Object.values(state.questions)
    };
};

const mDTP = dispatch => {
    return {
        requestQuestions: questions => dispatch(requestQuestions(questions)),
        deleteQuestion: questionId => dispatch(deleteQuestion(questionId))
    };
};

export default connect(mSTP, mDTP)(QuestionIndex);