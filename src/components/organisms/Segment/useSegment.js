import { useReducer, useEffect } from 'react';
import { segmentReducer } from './helpers/segmentReducer';

export const useSegment = (segment, segmentUpdater) => {

    const [ _segment, dispatch ] = useReducer(segmentReducer, segment);

    useEffect(() => {
        segmentUpdater(_segment);
      }, [_segment]);

    return { _segment, dispatch }

}