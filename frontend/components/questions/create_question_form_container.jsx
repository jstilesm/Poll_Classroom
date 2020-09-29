import { connect } from 'react-redux';
import { createQuestion } from '../../actions/question_actions';
import QuestionForm from './question_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = ({state, errors}) => {
    return {
        errors: errors.session,
        question: {
            title: "",
            kind: "",
            response_limit: 1,
            closed: false,
            allow_unregistered: false
        },
    };
};

const mDTP = dispatch => {
    return {
        processForm: question => dispatch(createQuestion(question)),
        openModal: () => dispatch(openModal("Add Question")),
        closeModal: () => dispatch(closeModal())
        
    };
};

export default connect(mSTP, mDTP)(QuestionForm);