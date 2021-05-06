import React from 'react';

import CalculatorComponent from './CalculatorComponent';
import { useReducer } from 'react';
import { initialSegments, types, segmentsReducer } from './segmentsReducer';
import { actions } from '@helpers/actions';

const Calculator = () => {

  const [ segments, dispatch ] = useReducer( segmentsReducer, initialSegments );
  const segmentsActions = actions( types, dispatch );

  return(
    <CalculatorComponent 
      segments={segments}
      segmentsActions={segmentsActions}
    />
  )

};

export default Calculator;
