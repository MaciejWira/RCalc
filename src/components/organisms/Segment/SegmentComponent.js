import { StyledSegment, SegmentHeader, SegmentHeading, ButtonWrapper, SegmentHeadingMobile, margin, DragButton, StyledBox, SegmentContainer } from './helpers/styled';
import Button from '@atoms/Button';
import Factors from '@organisms/Factors';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { rem } from '@styles/functions';
import ButtonDir from '@atoms/ButtonDir';
import SegmentAnimation from '@layouts/SegmentAnimation/index';

const SegmentComponent = ({ 
    factors, 
    id,
    segmentActions,
    segmentsActions,
    segmentsAmount,
    index,
    animation,
    animationVal,
    removeHandler,
    opacity,
    wrapperRef
}) => {

  const { t } = useTranslations(content);

  return(
    <SegmentAnimation 
      opacity={opacity}
      animation={animation} 
      animationVal={animationVal} 
      wrapperRef={wrapperRef}
      segmentsActions={segmentsActions}>
      <SegmentContainer>
        <StyledBox>
          <StyledSegment>
            <SegmentHeader>
              <SegmentHeadingMobile>S{index + 1}</SegmentHeadingMobile>
              <SegmentHeading>{t.heading} {index + 1}</SegmentHeading>
              <ButtonWrapper>
                <Button
                    style={{ marginRight: rem(margin) }}
                    type='padded'
                    onClick={segmentActions.RESET}>
                    {t.reset}
                  </Button>
                {index === 0 && segmentsAmount === 1 ? null : (
                  <Button
                    type='padded color-primary'
                    onClick={() => removeHandler(true)}>
                    {t.removeSegment}
                  </Button>
                )}
                <ButtonDir
                    style={{ marginLeft: rem(margin) }}
                    dir='up'
                    type='minimal font-big'
                    onClick={() => segmentsActions.CHANGE_ORDER({ id, direction: -1 })} />
                <ButtonDir
                    type='minimal font-big'
                    onClick={() => segmentsActions.CHANGE_ORDER({ id })} />
                {/* <DragButton
                    type='minimal'
                    onClick={() => null}>
                      <RiDragMove2Fill />
                </DragButton> */}
              </ButtonWrapper>
            </SegmentHeader>
            <Factors 
              factors={factors}
              segmentActions={segmentActions}
            />
          </StyledSegment>
        </StyledBox>
      </SegmentContainer>
    </SegmentAnimation>
  )
}

export default SegmentComponent;