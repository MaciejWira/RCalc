import React from 'react';
import Factor from '@organisms/Factor';

const Factors = ({ factors, segmentActions }) => {

    const factorsMarkup = factors.map(factor => (
        <Factor
          key={factor.name}
          segmentActions={segmentActions}
          factor={factor}
        />
      ));

    return(
        <>{factorsMarkup}</>
    );

}

export default Factors;