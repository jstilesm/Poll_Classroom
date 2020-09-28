import { connect } from 'react-redux';
import { requestQuestion } from '../../actions/question_actions';
import QuestionShow from './edit_question_form';


const mSTP = (state, ownProps) => {
    return {
        question: state.questions[ownProps.match.params.questionId],
    };
};

const mDTP = dispatch => {
    return {
        requestQuestion: question => dispatch(requestQuestion(question))
    };
};

export default connect(mSTP, mDTP)(QuestionShow);