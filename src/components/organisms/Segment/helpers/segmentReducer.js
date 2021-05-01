import { initialSegment } from '@helpers/initialSegment';
import { updater } from './updater';

export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const UPDATE_BY_CHANGE = 'UPDATE_BY_CHANGE';
export const UPDATE_FULL_SUM = 'UPDATE_FULL_SUM';
export const RESET = 'RESET';
export const RESET_FACTOR = 'RESET_FACTOR';

export const segmentReducer = (segment, action) => {

  switch (action.type) {

    case TOGGLE_ACTIVE:
      const updatedAcitve = segment.factors.map(factor => ({
        ...factor,
        active: action.payload !== factor.name
      }))
      return {...segment, factors: updatedAcitve}

    // fall through
    case UPDATE_BY_CHANGE:
    case UPDATE_FULL_SUM:
      return updater(segment)(action);

    case RESET:
      return { ...initialSegment, id: segment.id };

    case RESET_FACTOR:
      const factors = segment.factors.map( factor => {
        if ( factor.name === action.payload ){
          return { ...factor, sum: 0 }
        } else return factor;
      });
      return updater({ ...segment, factors })(action);

    default:
      return segment;

  }

}
