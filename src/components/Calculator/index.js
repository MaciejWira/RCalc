import React, { useState } from 'react';

import Segment from "./Segment";
import { initialSegment } from "./helpers/initialSegment";

const Calculator = () => {

  const [ segments, setSegments ] = useState([ initialSegment ]);

  const segmentsMarkup = segments.map((segment, index) =>(
    <Segment
      key={index}
      initialSegment={initialSegment} />
  ))

  return(
    <div>
      {segmentsMarkup}
    </div>
  )

};

export default Calculator;
