import React from 'react';
import { segment } from '@translations';
import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';

const { heading } = segment;

const Segment = ({ segment, segmentUpdater, segmentRemover, no }) => {

  const { _segment, dispatch, lang } = useSegment(segment, segmentUpdater);

  return(
    <SegmentComponent
      heading={`${heading[lang]} ${no}`} 
      factors={_segment.factors} 
      dispatch={dispatch} 
      buttonHandler={() => segmentRemover(_segment.id)}
      buttonText="Usuń odcinek"
    />
  )
};

export default Segment;
