import { updater } from './updater';

export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const UPDATE_BY_CHANGE = 'UPDATE_BY_CHANGE';
export const UPDATE_FULL_SUM = 'UPDATE_FULL_SUM';

export const segmentReducer = (segment, action) => {

  switch (action.type) {

    case TOGGLE_ACTIVE:
      const updatedAcitve = segment.factors.map(factor => ({
        ...factor,
        active: action.payload === factor.name ? false : true
      }))
      return {...segment, factors: updatedAcitve}

    // fall through
    case UPDATE_BY_CHANGE:
    case UPDATE_FULL_SUM:
      return updater(segment)(action);

    default:
      return segment;

  }

}
