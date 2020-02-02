import React, { useState, useEffect } from 'react';

import './Field.scss';
import { transform } from '../helpers/transform';

const Field = ({
  factorName, isActive, unit, value, sum, dispatch, converter, transformation, isHidden
}) => {

  const dummySpan = React.createRef();

  // for setting input width equal to content (with a help of a dummy span)

  const [ inputWidth, setInputWidth ] = useState(0);
  const [ windowLoaded, setWindowLoaded ] = useState(false);

  const resize = () => {
    if (inputWidth !== dummySpan.current.clientWidth){
      setInputWidth(dummySpan.current.clientWidth);
    }
  }

  // resize on window load and then for every render

  useEffect(resize, [ windowLoaded ]);
  useEffect(resize);

  // setting initial width after css styles are loaded

  useEffect(() => {
    window.addEventListener('load', () => {
      setWindowLoaded(true)
    })
  }, [])

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
    // // arrows
    if (e.key === "ArrowUp") clickHandler("+");
    if (e.key === "ArrowDown") clickHandler("-");
  }

  const clickHandler = sign => {
    const isMax = unit.biggest ? value < unit.max : true;
    if (isActive && sign === '+' && isMax) dispatchHandler(SUM + CHANGE);
    else if (isActive && sign === '-' && sum > 0) dispatchHandler(SUM - CHANGE);
  }

  const activeClass = isActive ? "" : " Field--disactive",
        hiddenClass = isHidden ? " Field--hidden" : "";

  // add zeros in front of displayed value

  const missingZeros = unit.max ? unit.max.toString().length - value.toString().length : 0;
  let adder = "";
  if (missingZeros > 0){
    for (let i = 0; i < missingZeros; i++) adder += "0";
  };

  const valueDisplayed = unit.biggest ? value : adder + value;

  return(
    <div className={"Field" + activeClass + hiddenClass}>
      <div className="Field__wrapper">

        <div className="Field__buttons">
          <button
            className="Field__button Field__button--plus"
            onClick={() => clickHandler("+")}>+</button>
          <button
            className="Field__button Field__button--minus"
            onClick={() => clickHandler("-")}>-</button>
        </div>

        <div className="Field__main">
          <input
            className="Field__input"
            style={{width: `${inputWidth}px`}}
            disabled={isActive ? false : true}
            onChange={e => onChangeHandler(e)}
            onKeyDown={e => keyDownHandler(e)}
            type="text"
            value={valueDisplayed}/>
          <span
            ref={dummySpan}
            className="Field__input Field__input--dummy">{valueDisplayed}</span>
          <span className="Field__unit">{unit.unit}</span>
        </div>


      </div>
    </div>
  )
};

export default Field;
