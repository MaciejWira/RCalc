import React from 'react';

import CalculatorComponent from './CalculatorComponent';
import { useReducer } from 'react';
import { initialState, types, segmentsReducer } from './segmentsReducer';
import { actions } from '@helpers/actions';

const Calculator = () => {

  const [ segmentsState, dispatch ] = useReducer( segmentsReducer, initialState );
  const segmentsActions = actions( types, dispatch );

  return(
    <CalculatorComponent 
      segmentsState={segmentsState}
      segmentsActions={segmentsActions}
    />
  )

};

export default Calculator;
