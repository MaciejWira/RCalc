import React from 'react';
import { useCalc } from './useCalc';
import Field from '@organisms/Field';
import { transform } from '@helpers/transform';

const Fields = ({ factor, mainFactor = factor, segmentActions }) => {

    const { converter, valueHandler } = useCalc(factor, mainFactor);

    const fields = factor.units.map((unit, index) => {

        const transformation = factor.transform || "",
              sum = transform(transformation)(mainFactor.sum);

        return(
            <Field
                key={unit.name}
                factorName={mainFactor.name}
                isActive={mainFactor.active}
                sum={sum}
                converter={converter}
                transformation={transformation}
                unit={unit}
                value={valueHandler(unit, index)}
                segmentActions={segmentActions}
                />
        )
    });

    return( <>{fields}</> );

}

export default Fields;