import React from 'react';
import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';
import { actions } from '@helpers/actions';
import { types } from './helpers/segmentReducer';

const Segment = ({ segment, segmentsActions, index }) => {

  const { _segment, dispatch } = useSegment(segment, segmentsActions.UPDATE);
  const segmentActions = actions( types, dispatch );

  return(
    <SegmentComponent
      index={index}
      factors={_segment.factors} 
      segmentActions={segmentActions}
      id={segment.id}
      segmentsActions={segmentsActions}
    />
  )
};

export default Segment;
