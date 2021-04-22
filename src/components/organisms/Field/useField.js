import { UPDATE_FULL_SUM, UPDATE_BY_CHANGE } from '@organisms/Segment/helpers/segmentReducer';
import { useEffect, useState } from 'react';
import { dynamicInterval } from '@helpers/dynamicInterval';

export const useField = ({
    factorName, isActive, unit, value, sum, dispatch, converter, transformation
}) => {

  const [ valInterval, setValInterval ] = useState(null);

  const step = unit.step ? unit.step : 1,
        CHANGE = (unit.ratio * step / converter);

  const dispatchHandler = (value, type = UPDATE_FULL_SUM) => {
    if ( value === undefined ) return;
    dispatch({
      type,
      payload: {
        value,
        factorName,
        transformation
      }
    })
  };

  const endInterval = () => {
    if ( valInterval ){
      clearInterval(valInterval);
      setValInterval(null);
    }
  }

  const startInterval = changeVal => {
    if ( valInterval ) return;
    dispatchHandler( changeVal, UPDATE_BY_CHANGE );

    dynamicInterval({
      core: () => dispatchHandler( changeVal, UPDATE_BY_CHANGE ),
      callback: _interval => {
        endInterval();
        setValInterval(_interval);
      },
     },
     [ 2, 100 ], [ 6, 50 ]
    );

  }

  // interval clean up
  useEffect(() => endInterval, []);

  const changeHandler = char => {
    // const isMax = unit.biggest ? value >= unit.max : false;
    if (isActive && char === '+') return CHANGE;
    else if (isActive && char === '-' && sum > 0) return -CHANGE;
  };

  const onChangeHandler = e => {
    const newValue = e.target.value === "" ? "0" : e.target.value;
    const arr = newValue.split("");
    let flag = true;
    arr.forEach(char => {
      if (!/[0-9]/.test(char)) flag = false;
    });
    if (flag && (!unit.max || (unit.max && unit.max >= newValue))){
      dispatchHandler(sum + ( ( parseInt(newValue) - value ) * CHANGE ))
    };
  }

  const keyDownHandler = e => {
    if (e.key === "ArrowUp" && changeHandler("+") ) dispatchHandler( changeHandler("+"), UPDATE_BY_CHANGE );
    if (e.key === "ArrowDown" && changeHandler("-") ) dispatchHandler( changeHandler("-"), UPDATE_BY_CHANGE );
  }

  const mouseDownHandler = char => {
    if ( !changeHandler(char) ) return;
    startInterval( changeHandler(char) );
  };

  const mouseUpHandler = endInterval;

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
    mouseDownHandler,
    mouseUpHandler
  }

}