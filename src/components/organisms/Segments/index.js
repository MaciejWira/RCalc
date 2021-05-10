import Segment from '@organisms/Segment';

const Segments = ({ segmentsState, segmentsActions }) => {

    const segmentsMarkup = segmentsState.segments.map((segment, index) => {

        let animation = null;
        if ( segmentsState.animation?.elementPrimary?.id === segment.id ){
            animation = segmentsState.animation.elementPrimary
        } else if ( segmentsState.animation?.elementSecondary?.id === segment.id ){
            animation = segmentsState.animation.elementSecondary
        };

        return(
            <Segment
              key={segment.id}
              segmentsAmount={segmentsState.segments.length}
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