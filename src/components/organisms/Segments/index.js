import React from 'react';
import Segment from '@organisms/Segment';

const Segments = ({ segments, segmentUpdater, segmentRemover, changeOrder }) => {

    const segmentsMarkup = segments.map((segment, index) => (
      <Segment
        key={segment.id}
        segment={segment}
        index={index}
        segmentUpdater={segmentUpdater}
        segmentRemover={segmentRemover}
        changeOrder={changeOrder}
        />
    ));

    return(
        <>{segmentsMarkup}</>
    );

}

export default Segments;