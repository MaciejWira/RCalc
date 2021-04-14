import React from 'react';
import { useCalc } from '@organisms/Fields/useCalc';

const SummarySegment = ({ factor, mainFactor = factor }) => {

    const { valueHandler } = useCalc(factor, mainFactor);

    const segments = factor.units.map((unit, index) => (
        <span key={unit.name}>{valueHandler(unit, index)} {unit.unit} </span>
    ));

    return( <>{segments}</> );

}

export default SummarySegment;