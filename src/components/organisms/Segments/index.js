import React from 'react';
import Segment from '@organisms/Segment';

const Segments = ({ segments, segmentsActions }) => {

    const segmentsMarkup = segments.map((segment, index) => (
      <Segment
        key={segment.id}
        segment={segment}
        index={index}
        segmentsActions={segmentsActions}
        />
    ));

    return(
        <>{segmentsMarkup}</>
    );

}

export default Segments;