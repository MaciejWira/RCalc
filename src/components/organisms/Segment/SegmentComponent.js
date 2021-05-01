import React from 'react';
import { StyledSegment, SegmentHeader, SegmentHeading, MarginedButton, ButtonWrapper } from './helpers/styled';
import Button from '@atoms/Button';
import Factors from '@organisms/Factors';
import { RESET } from './helpers/segmentReducer';
import Box from '@layouts/Box/index';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';

const SegmentComponent = ({ 
    factors, 
    dispatch, 
    removeHandler,
    no
}) => {

  const { t } = useTranslations(content)

  return(
    <Box>
      <StyledSegment>
        <SegmentHeader>
          <SegmentHeading>{t.heading} {no}</SegmentHeading>
          <ButtonWrapper>
            <Button
                type='padded'
                onClick={() => dispatch({ type: RESET })}>
                {t.reset}
              </Button>
          {no === 1 ? null : (
            <MarginedButton
              type='padded color-primary'
              onClick={removeHandler}>
              {t.removeSegment}
            </MarginedButton>
          )}
          </ButtonWrapper>
        </SegmentHeader>
        <Factors 
          factors={factors}
          dispatch={dispatch}
        />
      </StyledSegment>
    </Box>
  )
}

export default SegmentComponent;