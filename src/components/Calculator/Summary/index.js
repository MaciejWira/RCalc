import React, { useEffect, useState } from 'react';

import { initialSegment } from "../helpers/initialSegment";
import { factorHandler } from '../helpers/factorHandler';

import {ReactComponent as Plus} from '../../../img/icons/plus.svg';
import {ReactComponent as Minus} from '../../../img/icons/minus.svg';

import './Summary.scss';

const Summary = ({ segments }) => {

  const [ summarySegment, setSummarySegment ] = useState({...initialSegment});
  const [ summaryOpened , setSummaryOpened ] = useState(false);

  const [ windowWidth, setWindowWidth ] = useState(0);
  const [ summaryHeight, setSummaryHeight ] = useState(0);

  const summaryRef = React.createRef();

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (windowWidth !== window.innerWidth) setWindowWidth(window.innerWidth);
    });
    setSummaryHeight(summaryRef.current.offsetHeight);
  },[]);

  useEffect(() => {
    if (summaryHeight !== summaryRef.current.offsetHeight){
      const el = summaryRef.current;
      setTimeout(() => {
        setSummaryHeight(el.offsetHeight);
        document.querySelector('body').style.paddingBottom = el.offsetHeight + 25 + 'px';
      }, 500)
    }
  }, [ summaryHeight, windowWidth, segments, summaryOpened ])

  useEffect(() => {

      // helping object for calculations
      const summaryFactors = {};
      initialSegment.factors.forEach(factor => {
        summaryFactors[factor.name] = {
          sum: 0,
          weight: 0
        }
      });

      // add sums for each factor, from all segments, to each other and inject it
      // or calculate the average based on weight
    segments.forEach(segment => {
      const segmentWeight = segment.factors.filter(factor => {
        return factor.name === 'time'
      })[0].sum; // time is weight
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
  }, [segments]);

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
      <div key={factor.name} className="Calculator__factor">
        <div className="Calculator__factor-part">
          <span>{factor.pretty}: </span>
          {factorHandler(factor, null, factor, "summary")}
        </div>
        <div className="Calculator__factor-part">
          {siblingsMarkup}
        </div>
      </div>
    )
  });

  const summaryHandler = () => {
    setSummaryOpened(prev => !prev);
  }

  return(
    <div
      ref={summaryRef}
      className={"Summary" + (summaryOpened ? " Summary--opened" : "")}>
      <div className="Summary__container container">
        <div className="Summary__main">
          <p className="Summary__segments">Ilość odcinów: {segments.length}</p>
          {summary}
        </div>
        <div className="Summary__more">
          <button
            onClick={summaryHandler}>{summaryOpened ? (<Minus />) : (<Plus />)}</button>
        </div>
      </div>
    </div>
  )
};

export default Summary;
