import React, { useState, useEffect } from 'react';

import Segment from "./Segment";
import { initialSegment } from "./helpers/initialSegment";
import { factorHandler } from './helpers/factorHandler';

const initialId = 1;

const Calculator = () => {

  const [ segments, setSegments ] = useState([ {...initialSegment, id: initialId } ]);
  const [ summarySegment, setSummarySegment ] = useState({...initialSegment});
  const [ presentId, setPresentId ] = useState(initialId);

  useEffect(() => {

    // summary functionality

    // helping object for calculations
    const summaryFactors = {};
    initialSegment.factors.forEach(factor => {
      summaryFactors[factor.name] = {
        sum: factor.sum,
        weight: 0
      }
    });

    // add sums for each factor, from all segments, to each other and inject it
    // or calculate the average based on weight
    segments.forEach(segment => {
      const segmentWeight = segment.factors[0].sum; // assuming it's distance
      segment.factors.forEach(factor => {
        const sum = summaryFactors[factor.name].sum; // present sum
        const weight = summaryFactors[factor.name].weight; // present weight
        if (segment.calculable){
          if (!factor.averaged){
            summaryFactors[factor.name].sum = sum + factor.sum;
          } else {
            summaryFactors[factor.name].sum = segmentWeight ? ( ( (sum * weight) + (factor.sum * segmentWeight) ) / ( weight + segmentWeight ) ) : sum;
            summaryFactors[factor.name].weight = weight + segmentWeight;
          }
        }
      })
    });

    // update state
    const updatedSummarySegment = JSON.parse(JSON.stringify(initialSegment)); // no spread operator - spread does not do deep copy!
    updatedSummarySegment.factors.forEach((factor, index) => {
      updatedSummarySegment.factors[index].sum = summaryFactors[factor.name].sum
    });
    setSummarySegment(updatedSummarySegment);
  }, [segments])

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

  const segmentsMarkup = segments.map(segment =>(
    <Segment
      key={segment.id}
      segmentUpdater={segmentUpdater}
      segmentRemover={segmentRemover}
      segment={segment} />
  ));

  const summary = summarySegment.factors.map(factor => {

    let siblingsMarkup = null;

    if (factor.siblings){
      siblingsMarkup = factor.siblings.map(sibling => (
        <div key={sibling.name}>
          <span>{sibling.pretty}: </span>
          {factorHandler(sibling, null, factor, "summary")}
        </div>
      ));
    }

    return(
      <div key={factor.name}>
        <div>
          <span>{factor.pretty}: </span>
          {factorHandler(factor, null, factor, "summary")}
        </div>
        {siblingsMarkup}
      </div>

    )
  })

  return(
    <div>
      {segmentsMarkup}
      <button onClick={segmentAdder}>Dodaj</button>
      <div>
        {summary}
      </div>
    </div>
  )

};

export default Calculator;
