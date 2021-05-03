import React from 'react';
import { StyledSegment, SegmentHeader, SegmentHeading, ButtonWrapper, SegmentHeadingMobile, margin, DragButton } from './helpers/styled';
import Button from '@atoms/Button';
import Factors from '@organisms/Factors';
import { RESET } from './helpers/segmentReducer';
import Box from '@layouts/Box/index';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { rem } from '@styles/functions';
import { RiDragMove2Fill } from 'react-icons/ri';
import ButtonDir from '@atoms/ButtonDir';

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
          <SegmentHeadingMobile>S{no}</SegmentHeadingMobile>
          <SegmentHeading>{t.heading} {no}</SegmentHeading>
          <ButtonWrapper>
            <Button
                style={{ marginRight: rem(margin) }}
                type='padded'
                onClick={() => dispatch({ type: RESET })}>
                {t.reset}
              </Button>
            {no === 1 ? null : (
              <Button
                type='padded color-primary'
                onClick={removeHandler}>
                {t.removeSegment}
              </Button>
            )}
            <ButtonDir
                style={{ marginLeft: rem(margin) }}
                dir='up'
                type='minimal font-big'
                onClick={() => null} />
            <ButtonDir
                type='minimal font-big'
                onClick={() => null} />
            <DragButton
                type='minimal'
                onClick={() => null}>
                  <RiDragMove2Fill />
            </DragButton>
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