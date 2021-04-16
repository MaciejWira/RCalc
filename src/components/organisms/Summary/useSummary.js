import React, { useEffect, useState } from 'react';
import { initialSegment } from "@helpers/initialSegment";
import { useTranslations } from '@translations/useTranslations';
import { translations } from '@helpers/initialSegment';

export const useSummary = segments => {

    const [ summarySegment, setSummarySegment ] = useState({...initialSegment});
    const [ summaryOpened , setSummaryOpened ] = useState(false);
    const { t } = useTranslations(translations);
  
    const [ windowWidth, setWindowWidth ] = useState(0);
    const [ summaryHeight, setSummaryHeight ] = useState(0);
  
    const summaryRef = React.createRef();
  
    useEffect(() => {
      window.addEventListener('resize', () => {
        if (windowWidth !== window.innerWidth) setWindowWidth(window.innerWidth);
      });
      setSummaryHeight(summaryRef.current.offsetHeight);
    },[]);
  
    useEffect(() => {
      if (summaryHeight !== summaryRef.current.offsetHeight){
        const el = summaryRef.current;
        setTimeout(() => {
          setSummaryHeight(el.offsetHeight);
          // document.querySelector('body').style.paddingBottom = el.offsetHeight + 25 + 'px';
        }, 500)
      }
    }, [ summaryHeight, windowWidth, segments, summaryOpened ])
  
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
  
    const summaryHandler = () => {
      setSummaryOpened(prev => !prev);
    }

    return { summarySegment, summaryHandler, summaryRef, summaryOpened, t };

}