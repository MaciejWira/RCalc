import { transform } from '@helpers/transform';

export const useCalc = (factor, mainFactor) => {

    let sum = transform(factor.transform)(mainFactor.sum);
    const converter = factor.converter ? factor.converter : 1;
    sum = Math.round(sum * converter);

    const valueHandler = (unit, index) => {

        let value = 0;
        if (index + 1 === factor.units.length) value = Math.floor(sum);
        else {
          value = Math.floor(sum / unit.ratio);
          if (value >= 1) sum = sum % unit.ratio;
        }

        return value;

    }

    return { converter, valueHandler};

}