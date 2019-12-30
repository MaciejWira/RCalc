import React, { useReducer, useEffect } from 'react';

import { segmentReducer } from "./segmentReducer";
import Factor from "../Factor";

import './Segment.scss';

const Segment = ({ segment, segmentUpdater, segmentRemover }) => {

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
      <div className="Segment">
        {factorsMarkup}
      </div>
      <button onClick={() => segmentRemover(_segment.id)}>Usuń</button>
    </div>

  )
};

export default Segment;
