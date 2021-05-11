import { initialSegment } from '@config/initialSegment';
import { searchParser } from '@helpers/searchParser';
import { updatedDisactive } from '@organisms/Segment/helpers/updater';

export const initialSegments = currentId => {

    if ( !window.location.search ) return [ {...initialSegment, id: `id-${currentId}` } ];

    const params = searchParser();

    for ( let key in params ){
        params[key] = params[key]?.split(',');
        if ( params[key]?.length === 1 && params[key][0] === '' ) params[key] = null;
    };

    if ( !params.id ) return [ {...initialSegment, id: `id-${currentId}` } ];

    // first create initial segments, which will be updated below
    const segments = params.id
                        .map( id => ({ ...initialSegment, id }) )
                        .map( (segment, index) => {

                            let calculableCounter = 0; // only two calculables -> third one will be disactive and counted

                            const updatedFactors = segment.factors.map( factor => {
                                if ( !params[factor.name] || calculableCounter > 1 ) return { ...factor, active: false };
                                const sum = +params[factor.name][index] || 0;
                                if ( ( sum || 0 ) === 0 ) return { ...factor, active: false };
                                else if ( sum > 0 ) calculableCounter++;
                                return { ...factor, sum, active: true };
                            });

                            const factorsCounted = updatedFactors.map( factor => {
                                if ( factor.active ) return factor;
                                else return {
                                    ...factor,
                                    sum: updatedDisactive(factor, updatedFactors)
                                }
                            })

                            return { 
                                ...segment, 
                                factors: calculableCounter > 1 ? factorsCounted : segment.factors, 
                                calculable: calculableCounter > 1 
                            }

                        })
                        .filter( segment => segment.calculable); // if segment is not calculable, just remove it

    return segments.length ? segments : [ {...initialSegment, id: `id-${currentId}` } ];

};