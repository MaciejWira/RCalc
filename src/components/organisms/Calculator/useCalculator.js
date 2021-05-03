import { useState } from 'react';
import { initialSegment } from "@helpers/initialSegment";

const initialId = 1;

export const useCalculator = () => {

    const [ segments, setSegments ] = useState([ {...initialSegment, id: initialId } ]);
    const [ presentId, setPresentId ] = useState(initialId); // custom id managment
  
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

    const changeOrder = (
      index, 
      direction = 1, // 1 - down, -1 - up
      steps = 1 
    ) => {
      
      if ( index === 0 && direction === -1 ) return;
      if ( index === segments.length - 1 && direction === 1 ) return;

      let aimIndex = index + ( direction * steps );
      if ( aimIndex < 0 ) aimIndex = 0;
      else if ( aimIndex > segments.length - 1 ) aimIndex = segments.length - 1;

      const chosenSegment = segments[index],
            aimSegment = segments[aimIndex],
            updatedSegments = [...segments];

      updatedSegments[index] = aimSegment;
      updatedSegments[aimIndex] = chosenSegment;

      setSegments(updatedSegments);

    };

    return { segments, segmentUpdater, segmentAdder, segmentRemover, changeOrder }

}