import { initialSegment } from '@config/initialSegment';
import { initialSegments } from './initialSegments';

let currentId = 1;
const initialAnimation = { elementPrimary: null, elementSecondary: null }; // id's of animated segments 

export const types = {
  UPDATE: 'UPDATE',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  CHANGE_ORDER: 'CHANGE_ORDER',
  RESET_ANIMATION: 'RESET_ANIMATION',
}

export const initialState = {
  segments: initialSegments(),
  animation: initialAnimation
};

export const segmentsReducer = (state, action) => {

  switch( action.type ){

    case types.UPDATE:
      const segmentsUpdated = state.segments.map(s => {
        if (s.id === action.payload.id) return action.payload;
        else return s;
      });
      return { ...state, segments: segmentsUpdated }

    case types.ADD:
      {
        currentId++;
        const id = `id-${currentId + 1}`;
        return {
          ...state,
          animation: { elementPrimary: { type: 'add', id } },
          segments: [ ...state.segments, { ...initialSegment, id }]
        };
      }

    case types.REMOVE:
      {
        const id = action.payload;
        const removedIndex = state.segments.findIndex( segment => segment.id === id);
        const afterRemoved =  state.segments[removedIndex + 1] && { 
          type: 'remove-after',
          id: state.segments[removedIndex + 1].id
        };
  
        const removeAnimation = { 
          elementPrimary: { type: 'remove', id }, 
          elementSecondary: afterRemoved
        }
  
        return {
          ...state,
          animation: removeAnimation,
          segments: state.segments.length > 1 ? state.segments.filter(segment => segment.id !== id) : state.segments
        }
      }

    case types.CHANGE_ORDER:
      {
        const { id, direction = 1 } = action.payload;

        const fromIndex = state.segments.findIndex( segment => segment.id === id);
        if ( fromIndex === 0 && direction === -1 ) return state;
        if ( fromIndex === state.segments.length - 1 && direction === 1 ) return state;
  
        let aimIndex = fromIndex + direction;
        if ( aimIndex < 0 ) aimIndex = 0;
        else if ( aimIndex > state.segments.length - 1 ) aimIndex = state.segments.length - 1;
  
        const fromSegment = state.segments[fromIndex],
              aimSegment = state.segments[aimIndex],
              segmentsReordered = [...state.segments];
  
        segmentsReordered[fromIndex] = aimSegment;
        segmentsReordered[aimIndex] = fromSegment;
  
        const changeOrderAnimation = { 
          // direction 'elementPrimary' is inverted, cause animation happens after segments rerender
          elementPrimary: { type: 'order', id: fromSegment.id, direction: -direction }, 
          elementSecondary: { type: 'order', id: aimSegment.id, direction } 
        }
  
        return { 
          ...state,
          animation: changeOrderAnimation,
          segments: segmentsReordered 
        };
      }

    case types.RESET_ANIMATION:
      return { ...state, animation: initialAnimation };

    default:
      return state;

  }

}