import React, { Fragment } from 'react';
import SummaryFactor from '@molecules/SummaryFactor';

const SummarySegment = ({ summarySegment, opened }) => {

    const summary = summarySegment.factors.map(factor => {

        let siblings = null;
    
        if (factor.siblings){
          siblings = factor.siblings.map(sibling => (
              <SummaryFactor
                opened={opened} 
                key={sibling.name}
                factor={sibling}
                mainFactor={factor}
              />
          ));
        }
    
        return(
          <Fragment key={factor.name}>
            <SummaryFactor
              opened={opened}
              factor={factor} />
            {siblings}
          </Fragment>
        )
    
    });

    return (<>{summary}</>)

}

export default SummarySegment;