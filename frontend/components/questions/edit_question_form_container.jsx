import { connect } from 'react-redux';
import { updateQuestion, requestQuestion} from '../../actions/question_actions';
import EditQuestionForm from './edit_question_form';


const mSTP = (state, ownProps) => {
    return {
        question: state.entities.questions[ownProps.match.params.questionId],
        formType: "Update Question"
    };
};

const mDTP = dispatch => {
    return {
        action: question => dispatch(updateQuestion(question)),
        requestQuestion: question => dispatch(requestQuestion(question))
    };
};

export default connect(mSTP, mDTP)(EditQuestionForm);