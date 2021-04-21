import { transform } from '@helpers/transform';
import { useState } from 'react';

export const useField = ({
    factorName, isActive, unit, value, sum, dispatch, converter, transformation
}) => {

  const [ valueInterval, setValueInteral ] = useState(null);

  const step = unit.step ? unit.step : 1,
        SUM = transform(transformation, sum),
        CHANGE = (unit.ratio * step / converter);

  const dispatchHandler = newSum => {
    dispatch({
      type: factorName,
      payload: newSum < 0 ? 0 : transform(transformation, newSum)
    })
  }

  const onChangeHandler = e => {
    const newValue = e.target.value === "" ? "0" : e.target.value;
    const arr = newValue.split("");
    let flag = true;
    arr.forEach(char => {
      if (!/[0-9]/.test(char)) flag = false;
    });
    if (flag && (!unit.max || (unit.max && unit.max >= newValue))){
      dispatchHandler(SUM + ( ( parseInt(newValue) - value ) * CHANGE ))
    };
  }

  const keyDownHandler = e => {
    if (e.key === "ArrowUp") valueHandler("+");
    if (e.key === "ArrowDown") valueHandler("-");
  }

  const valueHandler = char => {
    console.log('click');
    const isMax = unit.biggest ? value >= unit.max : false;
    if (isActive && char === '+' && !isMax) dispatchHandler(SUM + CHANGE);
    else if (isActive && char === '-' && sum > 0) dispatchHandler(SUM - CHANGE);
  };

  const mouseDownHandler = char => {
    // if ( !valueInterval ){
    //   console.log('init');
    //   const interval = setInterval(() => {
    //     valueHandler(char);
    //   }, 500);
    //   setValueInteral(interval);
    // } else {
    //   console.log('nope');
    // }
    valueHandler(char);
  };

  // add zeros in front of displayed value

  const missingZeros = unit.max ? unit.max.toString().length - value.toString().length : 0;
  let adder = "";
  if (missingZeros > 0){
    for (let i = 0; i < missingZeros; i++) adder += "0";
  };

  const valueDisplayed = unit.biggest ? value : adder + value;

  return {
    onChangeHandler,
    keyDownHandler,
    valueDisplayed,
    valueHandler,
    mouseDownHandler
  }

}