import Segment from '@organisms/Segment';

const Segments = ({ segmentsState, segmentsActions }) => {

    const segmentsMarkup = segmentsState.segments.map((segment, index) => {

        let animation = null;
        if ( segmentsState.animation?.from?.id === segment.id ){
            animation = segmentsState.animation.from
        } else if ( segmentsState.animation?.aim?.id === segment.id ){
            animation = segmentsState.animation.aim
        };

        return(
            <Segment
              key={segment.id}
              segment={segment}
              index={index}
              animation={animation}
              segmentsActions={segmentsActions}
              />
          )
    });

    return(
        <>{segmentsMarkup}</>
    );

}

export default Segments;