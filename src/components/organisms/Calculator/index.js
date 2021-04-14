import React from 'react';
import Segment from "@organisms/Segment";
import Summary from "@organisms/Summary";

import './Calculator.scss';
import { useCalculator } from './useCalculator';

const Calculator = () => {

  const { segments, segmentUpdater, segmentAdder, segmentRemover } = useCalculator();

  const segmentsMarkup = segments.map((segment, index) =>(
    <Segment
      key={segment.id}
      segment={segment}
      no={index + 1}
      segmentUpdater={segmentUpdater}
      segmentRemover={segmentRemover}
      />
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
