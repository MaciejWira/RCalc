import React from 'react';
import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';

const Segment = ({ segment, segmentUpdater, segmentRemover, changeOrder, index }) => {

  const { _segment, dispatch } = useSegment(segment, segmentUpdater);

  return(
    <SegmentComponent
      index={index}
      factors={_segment.factors} 
      dispatch={dispatch} 
      id={segment.id}
      changeOrder={changeOrder}
      removeHandler={() => segmentRemover(_segment.id)}
    />
  )
};

export default Segment;
