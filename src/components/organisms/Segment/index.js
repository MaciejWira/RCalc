import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';
import { actions } from '@helpers/actions';
import { types } from './helpers/segmentReducer';
import { useRef } from 'react';

const Segment = ({ segment, segmentsAmount, segmentsActions, index, animation }) => {
  
  const wrapperRef = useRef();
  const { 
    _segment, 
    dispatch, 
    removeHandler, 
    opacity,
    animationVal 
  } = useSegment(segment, segmentsActions, animation, wrapperRef);

  const segmentActions = actions( types, dispatch );

  return(
    <SegmentComponent
      index={index}
      factors={_segment.factors} 
      id={segment.id}
      segmentActions={segmentActions}
      segmentsActions={segmentsActions}
      segmentsAmount={segmentsAmount}
      animation={animation}
      animationVal={animationVal}
      removeHandler={removeHandler}
      opacity={opacity}
      wrapperRef={wrapperRef}
    />
  )
};

export default Segment;
