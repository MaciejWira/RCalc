import React from 'react';

import {ReactComponent as Plus} from '@img/icons/plus.svg';
import {ReactComponent as Minus} from '@img/icons/minus.svg';

import SummarySegment from './SummarySegment';
import { useSummary } from './useSummary';

const Summary = ({ segments }) => {

  const { summarySegment, summaryHandler, summaryRef, summaryOpened, t } = useSummary(segments)

  const summary = summarySegment.factors.map(factor => {

    let siblingsMarkup = null;

    if (factor.siblings){
      siblingsMarkup = factor.siblings.map(sibling => (
        <div key={sibling.name}>
          <span>{t[sibling.name]}: </span>
          <SummarySegment 
            factor={sibling}
            mainFactor={factor}
          />
        </div>
      ));
    }

    return(
      <div key={factor.name} className="Calculator__factor">
        <div className="Calculator__factor-part">
          <span>{t[factor.name]}: </span>
          <SummarySegment factor={factor} />
        </div>
        <div className="Calculator__factor-part">
          {siblingsMarkup}
        </div>
      </div>
    )

  });

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
