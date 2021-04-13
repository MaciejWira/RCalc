import React from 'react';

import './Field.scss';
import { useField } from './useField';

const Field = ({
  factorName, isActive, unit, value, sum, dispatch, converter, transformation, isHidden
}) => {

  const {
    inputWidth,
    dummySpan,
    onChangeHandler,
    keyDownHandler,
    activeClass,
    hiddenClass,
    valueDisplayed,
    clickHandler
  } = useField({
    factorName, isActive, unit, value, sum, dispatch, converter, transformation, isHidden
  });

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
