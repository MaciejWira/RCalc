import React, { useState, useEffect } from 'react';

import Segment from "./Segment";
import Summary from "./Summary";
import { initialSegment } from "./helpers/initialSegment";
import { factorHandler } from './helpers/factorHandler';

import './Calculator.scss';

const initialId = 1;

const Calculator = () => {

  const [ segments, setSegments ] = useState([ {...initialSegment, id: initialId } ]);
  const [ presentId, setPresentId ] = useState(initialId);

  const segmentUpdater = segment => {
    const updatedSegments = [...segments].map(s => {
      if (s.id === segment.id) return segment;
      else return s;
    });
    setSegments(updatedSegments);
  };

  const segmentAdder = () => {
    setSegments(prev => [...prev, {...initialSegment, id: presentId + 1 }]);
    setPresentId(prev => prev + 1);
  }

  const segmentRemover = id => {
    if (segments.length > 1){
      setSegments(prev => [...prev].filter(segment => segment.id !== id))
    }
  }

  const segmentsMarkup = segments.map((segment, index) =>(
    <Segment
      key={segment.id}
      no={index + 1}
      segmentUpdater={segmentUpdater}
      segmentRemover={segmentRemover}
      segment={segment} />
  ));

  return(
    <div className="Calculator container">
      {segmentsMarkup}
      <button
        className="a-button Calculator__button"
        onClick={segmentAdder}>Dodaj odcinek</button>
      <Summary segments={segments}/>
    </div>
  )

};

export default Calculator;
