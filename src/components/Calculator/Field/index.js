import React from 'react';

import './Field.scss';
import { transform } from '../helpers/transform';

const Field = ({
  factorName, isActive, unit, value, sum, dispatch, converter, transformation
}) => {

  const step = unit.step ? unit.step : 1,
        SUM = transform(transformation, sum),
        CHANGE = (unit.ratio * step / converter);

  const dispatchHandler = newSum => {
    dispatch({
      type: factorName, isActive,
      payload: newSum < 0 ? 0 : transform(transformation, newSum)
    })
  }

  const typeHandler = key => {
    const pattern = /[0-9]/;

    // add

    if (pattern.test(key)){
      const addValue = (value * 10) + parseInt(key);
      if (!unit.max || (unit.max && unit.max >= addValue)){
        const newSum = SUM + ((addValue - value) * CHANGE);
        dispatchHandler(newSum);
      }
    }

    // delete

    if (key === "Backspace" || key === "Delete"){
      if (value < 10) dispatchHandler(SUM - (CHANGE * value));
      else {
        const subtracktValue = value - (Math.floor(value / 10));
        dispatchHandler( SUM - (CHANGE * subtracktValue) );
      }
    }
  }

  const clickHandler = sign => {
    const isMax = unit.max ? value < unit.max : true;
    if (isActive && sign === 'add' && isMax) dispatchHandler(SUM + CHANGE);
    else if (isActive && sign === 'subtract' && sum > 0) dispatchHandler(SUM - CHANGE);
  }

  return(
    <div className="Field">
      <input
        disabled={isActive ? false : true}
        onChange={e => true}
        onKeyDown={e => typeHandler(e.key)}
        value={value}/>
      <label>{unit.unit}</label>
      <button onClick={() => clickHandler("add")}>+</button>
      <button onClick={() => clickHandler("subtract")}>-</button>
    </div>
  )
};

export default Field;
