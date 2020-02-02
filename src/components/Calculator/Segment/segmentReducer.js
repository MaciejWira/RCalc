
export const segmentReducer = (state, action) => {

  // set helper object for easy value search

  const factors = {};

  state.factors.forEach(factor => {
    factors[factor.name] = {
      active: factor.active,
      sum: factor.name === action.type ? action.payload : factor.sum
    }
  });

  // helping function

  const updater = caseFactor => {
    let calculableHelper = 0; // set calculable property if more than two factors are bigger than 0
    const updatedFactors = {...state}.factors.map(factor => {
      if (factor.name === caseFactor) return {...factor, sum: action.payload};
      else if (!factor.active){
        const updateDisactive = () => {
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
        return {...factor, sum: updateDisactive() }
      } else return factor;
    });
    updatedFactors.forEach(factor => {
      if (factor.sum > 0) calculableHelper++;
    });
    return {...state, factors: updatedFactors, calculable: calculableHelper > 1};
  }

  switch (action.type) {

    case 'toggleActive':
      const updatedAcitve = {...state}.factors.map(factor => ({
        ...factor,
        active: action.payload === factor.name ? false : true
      }))
      return {...state, factors: updatedAcitve}

    case 'distance':
      return updater('distance');

    case 'time':
      return updater('time');

    case 'speed':
      return updater('speed');

    default:
      return state;

  }

}
