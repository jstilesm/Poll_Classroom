import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';
import QuestionForm from './question_form';


const mSTP = state => {
    return {
        question: {
            title: "",
            kind: "",
            response_limit: 1,
            closed: false,
            allow_unregistered: false
        },
        formType: "Add Question"
    };
};

const mDTP = dispatch => {
    return {
        createQuestion: question => dispatch(createQuestion(question))
    };
};

export default connect(mSTP, mDTP)(QuestionForm);