import React from 'react';

import { useCalculator } from './useCalculator';
import CalculatorComponent from './CalculatorComponent';

const Calculator = () => {

  const { segments, segmentUpdater, segmentAdder, segmentRemover, t } = useCalculator();

  return(
    <CalculatorComponent 
      segments={segments}
      segmentUpdater={segmentUpdater}
      buttonHandler={segmentAdder}
      buttonText={t.addSegment}
      segmentRemover={segmentRemover}
    />
  )

};

export default Calculator;
