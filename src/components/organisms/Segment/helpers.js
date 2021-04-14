
// function for updating values of a disactive factor in a segment
const updatedDisactive = (factor, factors) => {
    switch (factor.name) {
      case 'speed':
        return factors.time.sum > 0 ? factors.distance.sum / factors.time.sum : 0;
      case 'time':
        return factors.speed.sum > 0 ? factors.distance.sum / factors.speed.sum : 0;
      case 'distance':
        return factors.time.sum * factors.speed.sum;
      default:
        return factor;
    }
  }

export const updater = ( caseFactor, segment, actionPayload, factors ) => {

    let calculableHelper = 0; // set calculable property if more than two factors are bigger than 0

    const updatedFactors = segment.factors.map( factor => {
      // update clicked factor
      if ( factor.name === caseFactor ) return { ...factor, sum: actionPayload };
      // update (calculate) disactive factor
      else if (!factor.active){
        return {...factor, sum: updatedDisactive( factor, factors ) }
      } else return factor;
    });

    updatedFactors.forEach(factor => {
      if (factor.sum > 0) calculableHelper++;
    });

    return {...segment, factors: updatedFactors, calculable: calculableHelper > 1};

  }