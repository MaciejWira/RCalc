import { useSegment } from './useSegment';
import SegmentComponent from './SegmentComponent';
import { actions } from '@helpers/actions';
import { types } from './helpers/segmentReducer';

const Segment = ({ segment, segmentsAmount, segmentsActions, index, animation }) => {

  const { _segment, dispatch } = useSegment(segment, segmentsActions.UPDATE);
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
    />
  )
};

export default Segment;
