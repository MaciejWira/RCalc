import React from 'react';
import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';
import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({

  en: {
    heading: 'Segment no'
  },

  pl: {
    heading: 'Segment nr'
  }

});

const Segment = ({ segment, segmentUpdater, segmentRemover, no }) => {

  const { _segment, dispatch, lang } = useSegment(segment, segmentUpdater);

  return(
    <SegmentComponent
      heading={`${strings.heading} ${no}`} 
      factors={_segment.factors} 
      dispatch={dispatch} 
      buttonHandler={() => segmentRemover(_segment.id)}
      buttonText="Usuń odcinek"
    />
  )
};

export default Segment;
