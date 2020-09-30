import { connect } from 'react-redux';
import { updateQuestion, requestQuestion} from '../../actions/question_actions';
import EditQuestionForm from './edit_question_form';


const mSTP = (state, ownProps) => {
    // debugger
    return {
        question: state.entities.questions[ownProps.match.params.questionId],
        formType: "Update Question",
        errors: state.errors.question
    };
};

const mDTP = dispatch => {
    return {
        action: question => dispatch(updateQuestion(question)),
        requestQuestion: question => dispatch(requestQuestion(question)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mSTP, mDTP)(EditQuestionForm);