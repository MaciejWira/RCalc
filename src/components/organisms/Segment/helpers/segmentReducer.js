import { updater } from './updater';

export const segmentReducer = (segment, action) => {

  const standardUpdater = updater(segment)(action.payload);

  switch (action.type) {

    case 'toggleActive':
      const updatedAcitve = segment.factors.map(factor => ({
        ...factor,
        active: action.payload === factor.name ? false : true
      }))
      return {...segment, factors: updatedAcitve}

    case 'distance':
      return standardUpdater('distance');

    case 'time':
      return standardUpdater('time');

    case 'speed':
      return standardUpdater('speed');

    default:
      return segment;

  }

}
