import React from 'react';

import Field from '../Field';
import { transform } from '../helpers/transform';
import './Factor.scss';

const Factor = ({ factor, dispatch }) => {

    // distribute factor sum through units

    const factorHandler = _factor => {
      let prepairedSum = _factor.transform ? transform(_factor.transform, factor.sum) : factor.sum;
      const converter = _factor.converter ? _factor.converter : 1;
      prepairedSum = Math.round(prepairedSum * converter);


      return _factor.units.map((unit, index) => {
        let value = 0;

        if (index + 1 === _factor.units.length){
          value = unit.decimal ? Math.floor(prepairedSum * unit.decimal) / unit.decimal : Math.floor(prepairedSum);
        } else {
          value = Math.floor(prepairedSum / unit.ratio);
          if (value >= 1) prepairedSum = prepairedSum % unit.ratio;
        }

        return(
          <Field
            key={unit.name}
            factorName={factor.name}
            isActive={factor.active}
            sum={factor.sum}
            converter={converter}
            transformation={_factor.transform || ""}
            unit={unit}
            value={value}
            dispatch={dispatch}/>)
      });
    }

    const fields = factorHandler(factor);

    const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {

      const fields = factorHandler(sibling);

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
