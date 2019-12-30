import React from 'react';

import { factorHandler } from '../helpers/factorHandler';
import './Factor.scss';

const Factor = ({ factor, dispatch }) => {

    const fields = factorHandler(factor, dispatch, factor, "fields");

    const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {

      const fields = factorHandler(sibling, dispatch, factor, "fields");

      return(
        <div key={sibling.name}>
          <label>{sibling.pretty || sibling.name}</label>
          {fields}
        </div>
      )
    });

    return(
      <div className="Factor">
        <label>{factor.pretty || factor.name}</label>
        <button
          style={factor.active ? null : {display: "none"}}
          onClick={() => dispatch({ type: 'toggleActive', payload: factor.name })}>Dezaktywuj</button>
        {fields}
        {altFields}
      </div>
    )
};

export default Factor;
