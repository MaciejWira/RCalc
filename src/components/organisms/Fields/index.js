import React from 'react';
import { useCalc } from './useCalc';
import Field from '@organisms/Field';

const Fields = ({ factor, mainFactor = factor, dispatch, isHidden }) => {

    const { converter, valueHandler } = useCalc(factor, mainFactor);

    const fields = factor.units.map((unit, index) => (
        <Field
            key={unit.name}
            factorName={mainFactor.name}
            isActive={mainFactor.active}
            isHidden={isHidden}
            sum={mainFactor.sum}
            converter={converter}
            transformation={factor.transform || ""}
            unit={unit}
            value={valueHandler(unit, index)}
            dispatch={dispatch}
            />
    ));

    return( <>{fields}</> );

}

export default Fields;