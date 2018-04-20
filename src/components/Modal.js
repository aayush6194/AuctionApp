import React from 'react';

function Modal(props) {
  var css = "modal-container " + props.display;
  return (
    <div className={css}>
      <div className="modal-box">
        <b onClick={props.modal} className="bt-close">X</b>
      </div>
    </div>
  );
}

export default Modal;
