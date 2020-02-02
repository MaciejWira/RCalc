import React, { useReducer, useEffect } from 'react';

import { segmentReducer } from "./segmentReducer";
import Factor from "../Factor";

import './Segment.scss';

const Segment = ({ segment, segmentUpdater, segmentRemover, no }) => {

  const [ _segment, dispatch ] = useReducer(segmentReducer, segment);

  useEffect(() => {
    segmentUpdater(_segment);
  }, [_segment]);

  const factorsMarkup = _segment.factors.map(factor => (
    <Factor
      key={factor.name}
      dispatch={dispatch}
      factor={factor}/>
  ))

  return(
    <div className="Segment-wrapper">
      <h2 className="Segment__heading">Odcinek nr {no}</h2>
      <div className="Segment">
        {factorsMarkup}
      </div>
      <button
        className="Segment__button"
        onClick={() => segmentRemover(_segment.id)}>Usuń odcinek</button>
    </div>

  )
};

export default Segment;
