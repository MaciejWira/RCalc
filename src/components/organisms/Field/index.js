import React from 'react';
import { useField } from './useField';
import FieldComponent from './FieldComponent';

const Field = ({
  factorName, isActive, unit, value, sum, dispatch, converter, transformation, isHidden
}) => {

  const {
    onChangeHandler,
    keyDownHandler,
    valueDisplayed,
    mouseDownHandler,
    mouseUpHandler
  } = useField({
    factorName, isActive, unit, value, sum, dispatch, converter, transformation, isHidden
  });

  return(
    <FieldComponent 
      onChangeHandler={onChangeHandler}
      keyDownHandler={keyDownHandler}
      valueDisplayed={valueDisplayed}
      mouseDownHandler={mouseDownHandler}
      mouseUpHandler={mouseUpHandler}
      unit={unit}
      isActive={isActive}
    />
  )
};

export default Field;
