
import { getProp } from '@helpers/getProp';
import { transform } from '@helpers/transform';
import { UPDATE_FULL_SUM, UPDATE_BY_CHANGE } from '@organisms/Segment/helpers/segmentReducer';
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

export const updater = segment => action  => {

  const { type, payload: { transformation, value, factorName } } = action;
  let calculableHelper = 0; // set calculable property if more than two factors are bigger than 0
  const t = transform( transformation );
  
  // first update clicked factor
  const updatedCaseFactorFactors = segment.factors.map( factor => {
    
      let updatedSum;
      if ( type === UPDATE_FULL_SUM ) updatedSum = t(value);
      else if ( type === UPDATE_BY_CHANGE ) updatedSum = t( t(factor.sum) + value );

      if ( updatedSum > factor.limit && updatedSum > factor.sum) return factor;

      if ( factor.siblings?.length ){
        let breakFlag = false;
        factor.siblings.forEach(sibling => {
          if ( t(updatedSum) > sibling.limit ) breakFlag = true;
        });
        if ( breakFlag ) return factor;
      }
    
      if ( factor.name === factorName ) return { 
        ...factor, 
        sum: updatedSum < 0 ? 0 : updatedSum
      };

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