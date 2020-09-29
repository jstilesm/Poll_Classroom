import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import CreateQuestionFormContainer from '../questions/create_question_form_container';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    } 
    let component;
    switch (modal) {
        case 'Add Question':            
            component = <CreateQuestionFormContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mSTP = state => {
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal)