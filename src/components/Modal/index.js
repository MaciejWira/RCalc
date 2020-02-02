import React, { useState } from 'react';

import './Modal.scss';

const Modal = ({ children, opened }) => {

  return(
    <div className={["Modal", opened ? "Modal--opened" : null].join(" ")}>
      <div className="Modal__content">
        {children}
      </div>
    </div>
  )
};

export default Modal;
