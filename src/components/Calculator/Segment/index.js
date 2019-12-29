import React, { useReducer, useEffect } from 'react';

import { segmentReducer } from "./segmentReducer";
import Factor from "../Factor";

import './Segment.scss';

const Segment = ({ initialSegment }) => {

  const [ segment, dispatch ] = useReducer(segmentReducer, initialSegment);

  const factorsMarkup = segment.map(factor => (
    <Factor
      key={factor.name}
      dispatch={dispatch}
      factor={factor}/>
  ))

  return(
    <div className="Segment">
      {factorsMarkup}
    </div>
  )
};

export default Segment;
