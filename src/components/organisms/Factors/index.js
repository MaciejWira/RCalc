import React from 'react';
import Factor from '@organisms/Factor';

const Factors = ({ factors, dispatch }) => {

    const factorsMarkup = factors.map(factor => (
        <Factor
          key={factor.name}
          dispatch={dispatch}
          factor={factor}
        />
      ));

    return(
        <>{factorsMarkup}</>
    );

}

export default Factors;