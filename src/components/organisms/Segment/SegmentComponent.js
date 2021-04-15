import React from 'react';
import { StyledSegment } from './helpers/styled';
import { H2 } from '@atoms/H2';
import Button from '@atoms/Button';
import Factors from '@organisms/Factors';

const SegmentComponent = ({ 
    heading, 
    factors, 
    dispatch, 
    buttonHandler,
    buttonText 
}) => (
    <StyledSegment>
      <H2>{heading}</H2>
      <Factors 
        factors={factors}
        dispatch={dispatch}
      />
      <Button onClick={buttonHandler}>
        {buttonText}
      </Button>
    </StyledSegment>
  )

export default SegmentComponent;