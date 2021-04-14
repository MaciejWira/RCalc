
import { updater } from './helpers';
export const segmentReducer = (segment, action) => {

  // set helper object for easy value search
  const factors = {};

  segment.factors.forEach(factor => {
    factors[factor.name] = {
      active: factor.active,
      sum: factor.name === action.type ? action.payload : factor.sum
    }
  });

  switch (action.type) {

    case 'toggleActive':
      const updatedAcitve = segment.factors.map(factor => ({
        ...factor,
        active: action.payload === factor.name ? false : true
      }))
      return {...segment, factors: updatedAcitve}

    case 'distance':
      return updater('distance', segment, action.payload, factors );

    case 'time':
      return updater('time', segment, action.payload, factors );

    case 'speed':
      return updater('speed', segment, action.payload, factors );

    default:
      return segment;

  }

}
