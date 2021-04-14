import React from 'react';
import Factor from "@organisms/Factor";
import { segment } from '@translations';
import { useSegment } from './useSegment';
import './Segment.scss';

const { heading } = segment;

const Segment = ({ segment, segmentUpdater, segmentRemover, no }) => {

  const { _segment, dispatch, lang } = useSegment(segment, segmentUpdater);

  const factorsMarkup = _segment.factors.map(factor => (
    <Factor
      key={factor.name}
      dispatch={dispatch}
      factor={factor}
    />
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
