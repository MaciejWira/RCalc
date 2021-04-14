import { useReducer, useEffect } from 'react';
import { segmentReducer } from './segmentReducer';
import { useSelector } from 'react-redux';

export const useSegment = (segment, segmentUpdater) => {

    const [ _segment, dispatch ] = useReducer(segmentReducer, segment);
    const lang = useSelector(state => state.lang);

    useEffect(() => {
        segmentUpdater(_segment);
      }, [_segment]);

    return { _segment, dispatch, lang }

}