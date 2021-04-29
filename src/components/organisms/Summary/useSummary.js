import { useEffect, useState } from 'react';
import { initialSegment } from "@helpers/initialSegment";
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';


export const useSummary = segments => {

    const [ summarySegment, setSummarySegment ] = useState({...initialSegment});
    const [ summaryOpened , setSummaryOpened ] = useState(false);
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
  
        // add sums for each factor, from all segments, to each other and inject it
        // or calculate the average based on weight
        segments.forEach(segment => {
          const segmentWeight = segment.factors.filter(factor => {
            return factor.name === 'time'
          })[0].sum; // time is weight
          segment.factors.forEach(factor => {
            const sum = summaryFactors[factor.name].sum; // present sum
            const weight = summaryFactors[factor.name].weight; // present weight
            if (segment.calculable){
              if (!factor.averaged){
                summaryFactors[factor.name].sum = sum + factor.sum;
              } else {
                summaryFactors[factor.name].sum = segmentWeight ? ( ( (sum * weight) + (factor.sum * segmentWeight) ) / ( weight + segmentWeight ) ) : sum;
                summaryFactors[factor.name].weight = weight + segmentWeight;
              }
            }
          })
        });
  
        // update state
      const updatedSummarySegment = JSON.parse(JSON.stringify(initialSegment)); // no spread operator - spread does not do deep copy!
      updatedSummarySegment.factors.forEach((factor, index) => {
        updatedSummarySegment.factors[index].sum = summaryFactors[factor.name].sum
      });
      setSummarySegment(updatedSummarySegment);
      
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
  
    const summaryHandler = () => {
      setSummaryOpened(prev => !prev);
    }

    return { summarySegment, summaryHandler, summaryOpened, t, scrollPosition };

}