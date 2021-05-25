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

    const animationFoo = (step = STEP) => {
      let _step = animationRef.current - step;
      animationRef.current = _step < 0 ? 0 : _step;
      setAnimationVal(animationRef.current);
      if ( animationRef.current > 0 ) requestAnimationFrame(() => animationFoo(step));
      else segmentsActions.RESET_ANIMATION();
    }

    useEffect(() => {
      if ( animation?.type === 'order' ){
          animationRef.current = 100; // 100%
          setAnimationVal(100);
          requestAnimationFrame(() => animationFoo(STEP));
      }
      else if ( animation?.type === 'remove-after' ){
          const h = wrapperRef.current.offsetHeight;
          animationRef.current = h;
          setAnimationVal(h);
          requestAnimationFrame(() => animationFoo( Math.floor( (h / 100) * STEP ) ));
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