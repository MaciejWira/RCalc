import React, { Fragment, useState } from 'react';

import Standards from '@components/Standards';
import './Factor.scss';

import { ReactComponent as Chevron } from '@img/icons/chevron-down.svg';
import Fields from './../Fields/index';

const Factor = ({ factor, dispatch }) => {

    const [isHidden, setIsHidden] = useState(false);
    
    const hideHandler = () => {
      if (factor.active) setIsHidden(false);
    }
    
    const activeClass = factor.active ? "" : " Factor--disactive",
          hiddenClass = isHidden ? " Factor--hidden" : "";

    const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {
      return(
        <Fragment key={sibling.name}>
          <div className="Factor__header">
            <h3 className="Factor__heading">{sibling.pretty || sibling.name}</h3>
          </div>
          <div className="Factor__fields">
            <Fields 
              factor={sibling}
              mainFactor={factor}
              dispatch={dispatch}
              isHidden={isHidden}
            />
          </div>
        </Fragment>
      )
    });

    const standards = !factor.standards ? null : (
      <Standards
        dispatch={dispatch}
        factor={factor}/>
    )

    return(
      <div className={"Factor" + activeClass + hiddenClass}>
        <div className="Factor__header">
          <h3 className="Factor__heading">{factor.pretty || factor.name}</h3>
          <div className="Factor__buttons">
            <button
              className="Factor__button"
              style={factor.active ? null : {display: "none"}}
              onClick={() => dispatch({ type: 'toggleActive', payload: factor.name })}>Dezaktywuj</button>
            <button
              className="Factor__button Factor__button--fold"
              onClick={hideHandler}>
              <Chevron />
            </button>
          </div>
        </div>
        <div className="Factor__fields">
          <Fields 
            factor={factor}
            dispatch={dispatch}
            isHidden={isHidden}
          />
        </div>
        {altFields}
        <div className="Factor__standards">
          {standards}
        </div>
      </div>
    )
};

export default Factor;
