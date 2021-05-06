import { initialSegment } from '@helpers/initialSegment';

let initialId = 1;

export const types = {
  UPDATE: 'UPDATE',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  CHANGE_ORDER: 'CHANGE_ORDER',
}

export const initialSegments = [ {...initialSegment, id: `id-${initialId}` } ];

export const segmentsReducer = (segments, action) => {

  switch( action.type ){

    case types.UPDATE:
      return segments.map(s => {
        if (s.id === action.payload.id) return action.payload;
        else return s;
      });

    case types.ADD:
      initialId++;
      return [ ...segments, { ...initialSegment, id: `id-${initialId + 1}` }];

    case types.REMOVE:
      if (segments.length > 1){
        return segments.filter(segment => segment.id !== action.payload)
      } else return segments;

    case types.CHANGE_ORDER:
      const { index, direction = 1 } = action.payload;
      if ( index === 0 && direction === -1 ) return segments;
      if ( index === segments.length - 1 && direction === 1 ) return segments;

      let aimIndex = index + direction;
      if ( aimIndex < 0 ) aimIndex = 0;
      else if ( aimIndex > segments.length - 1 ) aimIndex = segments.length - 1;

      const chosenSegment = segments[index],
            aimSegment = segments[aimIndex],
            updatedSegments = [...segments];

      updatedSegments[index] = aimSegment;
      updatedSegments[aimIndex] = chosenSegment;

      return updatedSegments;

    default:
      return segments;

  }

}