import React from 'react';

import Field from '../Field';
import { transform } from './transform';

// Helping function for distribution of factor values
// - _factor can be the same as mainFactor
// - above is made mainly for siblings

export const factorHandler = (_factor, dispatch, mainFactor, fieldsOrSummary, isHidden ) => {
  let prepairedSum = _factor.transform ? transform(_factor.transform, mainFactor.sum) : mainFactor.sum;
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

    if (fieldsOrSummary === 'fields'){

      // Field version - for segments
      // span version - for summary

      return(
        <Field
          key={unit.name}
          factorName={mainFactor.name}
          isActive={mainFactor.active}
          isHidden={isHidden}
          sum={mainFactor.sum}
          converter={converter}
          transformation={_factor.transform || ""}
          unit={unit}
          value={value}
          dispatch={dispatch}/>)
    } else {
        return(
          <span key={unit.name}>{value} {unit.unit} </span>
        )
    }


  });
}
