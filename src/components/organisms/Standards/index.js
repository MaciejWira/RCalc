import React, { useState } from 'react';
import './Standards.scss';

const Standards = ({ factor, dispatch }) => {

  const setStandard = standard => {
    dispatch({
      type: factor.name,
      payload: standard.value
    })
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
    <div className="Standards__main">
      <div className="Standards__content">
        <h3 className="Standards__heading">{factor.pretty}:</h3>
        <div className="Standards__buttons">
          {standardsMarkup}
        </div>
      </div>
    </div>
  )
};

export default Standards;
