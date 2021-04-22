import React from 'react';
import { StyledSegment, SegmentHeader, SegmentHeading, MarginedButton } from './helpers/styled';
import Button from '@atoms/Button';
import Factors from '@organisms/Factors';
import { ButtonWrapper } from './../Factor/styled';
import { RESET } from './helpers/segmentReducer';

const SegmentComponent = ({ 
    heading, 
    factors, 
    dispatch, 
    removeHandler,
    removeText,
    resetHandler,
    resetText,
}) => (
    <StyledSegment>
      <SegmentHeader>
        <SegmentHeading>{heading}</SegmentHeading>
        <ButtonWrapper>
          <MarginedButton
              type='padded'
              onClick={() => dispatch({ type: RESET })}>
              {resetText}
            </MarginedButton>
          <Button
              type='padded color-primary'
              onClick={removeHandler}>
              {removeText}
            </Button>
        </ButtonWrapper>
      </SegmentHeader>
      <Factors 
        factors={factors}
        dispatch={dispatch}
      />
    </StyledSegment>
  )

export default SegmentComponent;