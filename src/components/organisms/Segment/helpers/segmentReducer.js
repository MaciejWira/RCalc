import { initialSegment } from '@helpers/initialSegment';
import { updater } from './updater';

export const types = {
  TOGGLE_ACTIVE: 'TOGGLE_ACTIVE',
  UPDATE_BY_CHANGE: 'UPDATE_BY_CHANGE',
  UPDATE_FULL_SUM: 'UPDATE_FULL_SUM',
  RESET: 'RESET',
  RESET_FACTOR: 'RESET_FACTOR'
};

export const segmentReducer = (segment, action) => {

  switch (action.type) {

    case types.TOGGLE_ACTIVE:
      const updatedAcitve = segment.factors.map(factor => ({
        ...factor,
        active: action.payload !== factor.name
      }))
      return {...segment, factors: updatedAcitve}

    // fall through
    case types.UPDATE_BY_CHANGE:
    case types.UPDATE_FULL_SUM:
      return updater(segment)(action);

    case types.RESET:
      return { ...initialSegment, id: segment.id };

    case types.RESET_FACTOR:
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
