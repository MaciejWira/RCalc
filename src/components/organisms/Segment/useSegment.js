import { useReducer, useEffect, useState, useRef } from 'react';
import { segmentReducer } from './helpers/segmentReducer';

const STEP = 7;

export const useSegment = (segment, segmentsActions, animation, wrapperRef) => {

    const [ _segment, dispatch ] = useReducer(segmentReducer, segment);
    const [ opacity, setOpacity ] = useState(1);
    const [ removeOn, setRemoveOn ]  = useState(false);
    const animationRef = useRef(0);
    const [ animationVal, setAnimationVal ] = useState(animationRef.current);

    // before remove behaviour
    // separate animation for removing a segment
    // easier to do it here - rest of the animations are done after state update (so removed one is not present anymore)
    useEffect(() => {
      if ( removeOn && opacity > 0 ){
        setOpacity( prev => prev - .04)
      } else if ( opacity <= 0 )  {
        segmentsActions.REMOVE(_segment.id);
      }
    }, [ removeOn, opacity ]);

    const animationFoo = (step = STEP, limit = 0, direction = 'down') => {
      let _step = animationRef.current - step;
      animationRef.current = (_step < limit && direction === 'down') || (_step > limit && direction === 'up') ? limit : _step;
      setAnimationVal(animationRef.current);
      if ( direction === 'down' && animationRef.current > limit ){
        requestAnimationFrame(() => animationFoo(step, limit, direction));
      }
      else if ( direction === 'up' && animationRef.current < limit ){
        requestAnimationFrame(() => animationFoo(step, limit, direction));
      }
      else segmentsActions.RESET_ANIMATION();
    }

    useEffect(() => {
      if ( animation?.type === 'order' ){
          animationRef.current = 100; // transform 100%
          setAnimationVal(100);
          requestAnimationFrame(() => animationFoo(STEP));
      }
      else if ( animation?.type === 'remove-after' ){
          const h = wrapperRef.current.offsetHeight;
          animationRef.current = h;
          setAnimationVal(h);
          requestAnimationFrame(() => animationFoo( Math.floor( (h / 100) * STEP ) ));
      }
      else if ( animation?.type === 'add' ){
          animationRef.current = 0; // opacity 0
          setAnimationVal(0);
          requestAnimationFrame(() => animationFoo(-(STEP / 100), 1, 'up'));
      };
    }, [ animation ]);

    useEffect(() => {
        segmentsActions.UPDATE(_segment);
      }, [_segment]);

    return { 
      _segment, 
      dispatch, 
      removeHandler: setRemoveOn, 
      opacity, 
      animationVal
    }

}