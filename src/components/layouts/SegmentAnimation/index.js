import { useState, useEffect, useRef } from "react";

// pixels per frame change
const STEP = 7;

const SegmentAnimation = ({ animation, segmentsActions, children }) => {

    const wrapper = useRef();

    const animationRef = useRef(0);
    const [ animationVal, setAnimationVal ] = useState(animationRef.current);

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
            const h = wrapper.current.offsetHeight;
            animationRef.current = h;
            setAnimationVal(h);
            requestAnimationFrame(() => animationFoo( Math.floor( (h / 100) * STEP ) ));
        };
    }, [ animation ]);

    const style = {
        'order': { transform: `translateY(${animationVal * ( animation?.direction || 0 )}%)` },
        'remove-after': { marginTop: animationVal + 'px' }
    }

    return (
        <div
            ref={wrapper}
            style={style[animation?.type]}>
            {children}
        </div>
    );
}
 
export default SegmentAnimation;