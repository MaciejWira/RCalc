import React from 'react';

import { useCalculator } from './useCalculator';
import CalculatorComponent from './CalculatorComponent';

const Calculator = () => {

  const { segments, segmentUpdater, segmentAdder, segmentRemover } = useCalculator();

  return(
    <CalculatorComponent 
      segments={segments}
      segmentUpdater={segmentUpdater}
      buttonHandler={segmentAdder}
      buttonText='Dodaj odcinek'
      segmentRemover={segmentRemover}
    />
  )

};

export default Calculator;
