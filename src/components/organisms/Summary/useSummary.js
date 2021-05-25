import { useEffect, useState } from 'react';
import { initialSegment } from '@config/initialSegment';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { createSearch } from '@helpers/createSearch';

export const useSummary = segments => {

    const [ summarySegment, setSummarySegment ] = useState({...initialSegment});
    const [ urlSearch, setUrlSearch ] = useState(createSearch(segments));
    // only count calculable ones
    const [ segmentsLength, setSegmentsLength ] = useState(0);
    
    // 0 - totally hidden
    // 1 - minimized
    // 2 - large
    const [ summaryOpened , setSummaryOpened ] = useState(0);
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const { t } = useTranslations( content );
  
    useEffect(() => {
  
        // helping object for calculations
        const summaryFactors = {};
        initialSegment.factors.forEach(factor => {
          summaryFactors[factor.name] = {
            sum: 0,
            weight: 0
          }
        });

        let _segmentsLength = 0;
  
        // add sums for each factor, from all segments, to each other and inject it
        // or calculate the average based on weight
        segments.forEach(segment => {

          if (segment.calculable) _segmentsLength++;

          segment.factors.forEach(factor => {
            if (!segment.calculable) return;

            if (!factor.averaged){ // no average, just sum
              summaryFactors[factor.name].sum += factor.sum;
            } else {
              const currentSum = summaryFactors[factor.name].sum; // current sum
              const currentWeight = summaryFactors[factor.name].weight; // current weight
              const segmentWeight = segment.factors.find(factor => factor.name === 'time').sum; // time is weight
              summaryFactors[factor.name].sum = segmentWeight ? ( ( (currentSum * currentWeight) + (factor.sum * segmentWeight) ) / ( currentWeight + segmentWeight ) ) : currentSum;
              summaryFactors[factor.name].weight += segmentWeight;
            }
          });

          setSegmentsLength(_segmentsLength);

        });

        // update state
        const updatedSummarySegment = JSON.parse(JSON.stringify(initialSegment));
        updatedSummarySegment.factors.forEach((factor, index) => {
          updatedSummarySegment.factors[index].sum = summaryFactors[factor.name].sum
        });
        setSummarySegment(updatedSummarySegment);

        setUrlSearch( createSearch(segments) );
      
    }, [segments]);

    const scrollHandler = () => {
      setScrollPosition(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener('scroll', scrollHandler);

      return () => {
        window.removeEventListener('scroll', scrollHandler)
      };

    }, []);
  
    const summaryHandler = direction => () => {
      setSummaryOpened(prev => {
        if ( direction === 'plus' ){
          return prev === 2 ? prev : prev + 1
        } else {
          return prev === 0 ? prev : prev - 1
        }
      });
    };

    return { summarySegment, summaryHandler, summaryOpened, t, scrollPosition, urlSearch, segmentsLength };

}