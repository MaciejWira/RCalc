import { useState, useEffect, useRef } from "react";

// pixels per frame change
const step = 7;

const SegmentAnimation = ({ animation, segmentsActions, children }) => {

    // ref for requestAnimationFrame - for actual values
    const translateRef = useRef(100);
    const [ translate, setTranslate ] = useState(translateRef.current);

    const translateFoo = () => {
        let _step = translateRef.current - step;
        translateRef.current = _step < 0 ? 0 : _step;
        setTranslate(translateRef.current);
        if ( translateRef.current > 0 ){
            requestAnimationFrame(translateFoo);
        } else {
            segmentsActions.RESET_ANIMATION();
            translateRef.current = 100;
        }
    };

    useEffect(() => {
        if ( animation ) requestAnimationFrame(translateFoo)
    }, [ animation ]);

    return (
        <div style={{ transform: `translateY(${translate * ( animation?.direction || 0 )}%)` }}>
            {children}
        </div>
    );
}
 
export default SegmentAnimation;