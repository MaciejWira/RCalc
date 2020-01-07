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
      type: factorName,
      payload: newSum < 0 ? 0 : transform(transformation, newSum)
    })
  }

  const typeHandler = e => {
    const value = e.target.value;
    const arr = value.split("");
    let flag = true;
    arr.forEach(char => {
      if (!/[0-9]/.test(char)) flag = false;
    });
    if (flag && (!unit.max || (unit.max && unit.max >= value))) dispatchHandler(parseInt(value * unit.ratio));
  }

  const keyDownHandler = e => {
    // // arrows
    if (e.key === "ArrowUp") clickHandler("+");
    if (e.key === "ArrowDown") clickHandler("-");
  }

  const clickHandler = sign => {
    const isMax = unit.max ? value < unit.max : true;
    if (isActive && sign === '+' && isMax) dispatchHandler(SUM + CHANGE);
    else if (isActive && sign === '-' && sum > 0) dispatchHandler(SUM - CHANGE);
  }

  return(
    <div className="Field">
      <input
        disabled={isActive ? false : true}
        onChange={e => typeHandler(e)}
        onKeyDown={e => keyDownHandler(e)}
        type="text"
        value={value}/>
      <label>{unit.unit}</label>
      <button onClick={() => clickHandler("+")}>+</button>
      <button onClick={() => clickHandler("-")}>-</button>
    </div>
  )
};

export default Field;
