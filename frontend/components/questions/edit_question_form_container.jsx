import { connect } from 'react-redux';
import { updateQuestion, deleteQuestion} from '../../actions/question_actions';
import EditQuestionForm from './edit_question_form';


const mSTP = (state, ownProps) => {
    return {
        question: state.questions[ownProps.match.params.questionId],
        formType: "Update Question"
    };
};

const mDTP = dispatch => {
    return {
        updateQuestion: question => dispatch(updateQuestion(question)),
        deleteQuestion: questionId => dispatch(deleteQuestion(questionId))
    };
};

export default connect(mSTP, mDTP)(EditQuestionForm);