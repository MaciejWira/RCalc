import { useReducer, useEffect } from 'react';
import { segmentReducer } from './helpers/segmentReducer';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';

export const useSegment = (segment, segmentUpdater) => {

    const { t } = useTranslations(content);
    const [ _segment, dispatch ] = useReducer(segmentReducer, segment);

    useEffect(() => {
        segmentUpdater(_segment);
      }, [_segment]);

    return { _segment, dispatch, t }

}