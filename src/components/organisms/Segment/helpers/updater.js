
import { getProp } from '@helpers/getProp';
// function for updating values of a disactive factor in a segment

const updatedDisactive = (factor, factors) => {

    const getFactorsName = getProp(factors)('name'),
          time = getFactorsName('time').sum,
          distance = getFactorsName('distance').sum,
          speed = getFactorsName('speed').sum;

    switch (factor.name) {
      case 'speed':
        return  time > 0 ? distance / time : 0;
      case 'time':
        return  speed > 0 ? distance / speed : 0;
      case 'distance':
        return  time * speed;
      default:
        return factor.sum;
    }
  }

export const updater = segment => actionPayload => caseFactor => {

    let calculableHelper = 0; // set calculable property if more than two factors are bigger than 0

    // first update clicked factor
    const updatedCaseFactorFactors = segment.factors.map( factor => {
      if ( factor.name === caseFactor ) return { ...factor, sum: actionPayload };
      else return factor;
    });

    // based on above update not active factor
    const updatedFactors = updatedCaseFactorFactors.map( factor => {
      if (!factor.active){
        return {...factor, sum: updatedDisactive( factor, updatedCaseFactorFactors ) }
      } else return factor;
    });

    updatedFactors.forEach(factor => {
      if (factor.sum > 0) calculableHelper++;
    });

    return {...segment, factors: updatedFactors, calculable: calculableHelper > 1};

  }