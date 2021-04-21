import React from 'react';
import { Buttons, StyledField, Wrapper, StyledButton, Main, Input, Span } from './styled';

const FieldComponent = ({
    onChangeHandler,
    keyDownHandler,
    valueDisplayed,
    mouseDownHandler,
    mouseUpHandler,
    unit,
    isActive,
}) => (
    <StyledField>
      <Wrapper>

        <Buttons isActive={isActive}>
          <StyledButton 
            type="round" 
            onMouseDown={() => mouseDownHandler("+")}
            onMouseUp={mouseUpHandler}
            >+</StyledButton>
          <StyledButton 
            type="round" 
            onMouseDown={() => mouseDownHandler("-")}
            onMouseUp={mouseUpHandler}
            >-</StyledButton>
        </Buttons>

        <Main>
          <Input
            isActive={isActive}
            disabled={isActive ? false : true}
            onChange={e => onChangeHandler(e)}
            onKeyDown={e => keyDownHandler(e)}
            type="text"
            value={valueDisplayed}/>
          <Span isActive={isActive}>{unit.unit}</Span>
        </Main>


      </Wrapper>
    </StyledField>
  );

export default FieldComponent;
