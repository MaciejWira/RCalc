import React from 'react';
import { StyledSegment, SegmentHeader, SegmentHeading, MarginedButton, ButtonWrapper } from './helpers/styled';
import Button from '@atoms/Button';
import Factors from '@organisms/Factors';
import { RESET } from './helpers/segmentReducer';
import Box from '@layouts/Box/index';

const SegmentComponent = ({ 
    heading, 
    factors, 
    dispatch, 
    removeHandler,
    removeText,
    resetText,
}) => (
    <Box>
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
    </Box>
  )

export default SegmentComponent;