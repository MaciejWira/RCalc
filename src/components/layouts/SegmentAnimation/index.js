const SegmentAnimation = ({ animation, opacity, children, wrapperRef, animationVal }) => {

    // a little hack
    // if there is an removal animation, than the animation value will not make if the true value before render
    // so if the remove action goes, animationVal can't be 0 for start
    const height = animationVal || wrapperRef?.current?.offsetHeight; 

    const style = {
        'order': { transform: `translateY(${animationVal * ( animation?.direction || 0 )}%)` },
        'remove-after': { marginTop: height + 'px' },
        'add': { opacity: animationVal }
    };

    // opacity is for before remove animation
    return (
        <div
            ref={wrapperRef}
            style={{ opacity, ...style[animation?.type] }}>
            {children}
        </div>
    );
}
 
export default SegmentAnimation;