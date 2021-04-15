import React from 'react';

const Modal = ({ children, opened = false }) => {

  return(
    <div className={["Modal", opened ? "Modal--opened" : null].join(" ")}>
      <div className="Modal__content">
        {children}
      </div>
    </div>
  );

};

export default Modal;
