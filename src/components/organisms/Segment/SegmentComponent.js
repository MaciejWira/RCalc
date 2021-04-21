import React from 'react';
import { StyledSegment, SegmentHeader, SegmentHeading } from './helpers/styled';
import Button from '@atoms/Button';
import Factors from '@organisms/Factors';

const SegmentComponent = ({ 
    heading, 
    factors, 
    dispatch, 
    buttonHandler,
    buttonText,
}) => (
    <StyledSegment>
      <SegmentHeader>
        <SegmentHeading>{heading}</SegmentHeading>
        <Button
            type='padded color-primary'
            onClick={buttonHandler}>
            {buttonText}
          </Button>
      </SegmentHeader>
      <Factors 
        factors={factors}
        dispatch={dispatch}
      />
    </StyledSegment>
  )

export default SegmentComponent;