import React from 'react';
import Segments from '@organisms/Segments/index';
import Summary from "@organisms/Summary";
import Button from '@atoms/Button';

import { useCalculator } from './useCalculator';
import { StyledCalculator } from './styled';

const Calculator = () => {

  const { segments, segmentUpdater, segmentAdder, segmentRemover } = useCalculator();

  return(
    <StyledCalculator>
      <Segments 
        segments={segments}
        segmentUpdater={segmentUpdater}
        segmentRemover={segmentRemover}
      />
      <Button onClick={segmentAdder}>
        Dodaj odcinek
      </Button>
      <Summary segments={segments}/>
    </StyledCalculator>
  )

};

export default Calculator;
