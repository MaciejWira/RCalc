import React from 'react';
import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';

const Segment = ({ segment, segmentUpdater, segmentRemover, no }) => {

  const { _segment, dispatch, t } = useSegment(segment, segmentUpdater);

  return(
    <SegmentComponent
      heading={`${t.heading} ${no}`} 
      factors={_segment.factors} 
      dispatch={dispatch} 
      id={segment.id}
      buttonHandler={() => segmentRemover(_segment.id)}
      buttonText={t.removeSegment}
    />
  )
};

export default Segment;
