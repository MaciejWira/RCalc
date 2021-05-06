import React from 'react';
import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';

const Segment = ({ segment, segmentsActions, index }) => {

  const { _segment, dispatch } = useSegment(segment, segmentsActions.UPDATE);

  return(
    <SegmentComponent
      index={index}
      factors={_segment.factors} 
      dispatch={dispatch} 
      id={segment.id}
      segmentsActions={segmentsActions}
    />
  )
};

export default Segment;
