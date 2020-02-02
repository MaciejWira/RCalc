import React, { useState } from 'react';

import Modal from '../../Modal';

import './Standards.scss';

const Standards = ({ factor, dispatch }) => {

  console.log(factor);

  const [ openedModal, setOpenedModal ] = useState(false);

  const setStandard = standard => {
    dispatch({
      type: factor.name,
      payload: standard.value
    })
    setOpenedModal(false)
  }

  const standardsMarkup = factor.standards.map((standard, index) => (
    <button
      key={index}
      onClick={() => setStandard(standard)}
      className="Standards__button">
      {standard.name}
    </button>
  ))

  return(
    <div className="Standards">
      <div className="Standards__button-wrapper">
        <button
          onClick={() => setOpenedModal(true)}
          className="Standards__init">
          Standardowe wartości
        </button>
      </div>
      <Modal opened={openedModal}>
        <div className="Standards__main">
          <div className="Standards__content">
            <h3 className="Standards__heading">{factor.pretty}:</h3>
            <div className="Standards__buttons">
              {standardsMarkup}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
};

export default Standards;
