import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CreateGroupFormContainer from "../groups/create_group_form_container";

function Modal({ errors, modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "Add Question":
      component = <CreateGroupFormContainer />;
      break;
    default:
      return null;
  }
  console.log(errors);
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
      <div>{errors}</div>
    </div>
  );
}

const mSTP = (state) => {
  // debugger
  return {
    modal: state.ui.modal,
    // errors: state.errors.question
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(Modal);
