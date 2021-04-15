import React from 'react';
import Segment from '@organisms/Segment';

const Segments = ({ segments, segmentUpdater, segmentRemover }) => {

    const segmentsMarkup = segments.map((segment, index) => (
      <Segment
        key={segment.id}
        segment={segment}
        no={index + 1}
        segmentUpdater={segmentUpdater}
        segmentRemover={segmentRemover}
        />
    ));

    return(
        <>
            {segmentsMarkup}
        </>
    );

}

export default Segments;