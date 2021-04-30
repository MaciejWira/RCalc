import React from 'react';
import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';

const Segment = ({ segment, segmentUpdater, segmentRemover, no }) => {

  const { _segment, dispatch } = useSegment(segment, segmentUpdater);

  return(
    <SegmentComponent
      no={no}
      factors={_segment.factors} 
      dispatch={dispatch} 
      id={segment.id}
      removeHandler={() => segmentRemover(_segment.id)}
    />
  )
};

export default Segment;
