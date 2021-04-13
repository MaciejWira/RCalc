import React, { useReducer, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { segmentReducer } from "./segmentReducer";
import Factor from "@components/Factor";
import { segment } from '@translations';
import './Segment.scss';

const { heading } = segment;

const Segment = ({ segment, segmentUpdater, segmentRemover, no }) => {

  const [ _segment, dispatch ] = useReducer(segmentReducer, segment);
  const lang = useSelector(state => state.lang);

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
      <h2 className="Segment__heading">{heading[lang]} {no}</h2>
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
