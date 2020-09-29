import { connect } from 'react-redux';
import { requestQuestion } from '../../actions/question_actions';
import QuestionShow from './question_show';


const mSTP = (state, ownProps) => {
    // debugger
    return {
        question: state.entities.questions[ownProps.match.params.questionId],
    };
};

const mDTP = dispatch => {
    return {
        requestQuestion: question => dispatch(requestQuestion(question))
    };
};

export default connect(mSTP, mDTP)(QuestionShow);