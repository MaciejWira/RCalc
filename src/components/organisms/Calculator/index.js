import React from 'react';

import { useCalculator } from './useCalculator';
import CalculatorComponent from './CalculatorComponent';

const Calculator = () => {

  const { segments, segmentUpdater, segmentAdder, segmentRemover, changeOrder } = useCalculator();

  return(
    <CalculatorComponent 
      segments={segments}
      segmentUpdater={segmentUpdater}
      buttonHandler={segmentAdder}
      segmentRemover={segmentRemover}
      changeOrder={changeOrder}
    />
  )

};

export default Calculator;
