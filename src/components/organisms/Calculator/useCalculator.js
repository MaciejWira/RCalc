import { useState } from 'react';
import { initialSegment } from "@helpers/initialSegment";
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
const initialId = 1;

export const useCalculator = () => {

    const [ segments, setSegments ] = useState([ {...initialSegment, id: initialId } ]);
    const [ presentId, setPresentId ] = useState(initialId); // custom id managment
    const { t } = useTranslations(content)
  
    // update segments on single segment change
    const segmentUpdater = segment => {
      const updatedSegments = segments.map(s => {
        if (s.id === segment.id) return segment;
        else return s;
      });
      setSegments(updatedSegments);
    };
  
    // add new segment handler
    const segmentAdder = () => {
      setSegments(prev => [...prev, { ...initialSegment, id: presentId + 1 }]);
      setPresentId(prev => prev + 1);
    }
  
    // remove segment handler
    const segmentRemover = id => {
      if (segments.length > 1){
        setSegments(prev => prev.filter(segment => segment.id !== id))
      }
    }

    return { segments, segmentUpdater, segmentAdder, segmentRemover, t }

}