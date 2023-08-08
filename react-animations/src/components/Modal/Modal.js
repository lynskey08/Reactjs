import React from "react";

import "./Modal.css";
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
  enter: 300,
  exit: 100,
};

function Modal(props) {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClose'
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
}

export default Modal;
