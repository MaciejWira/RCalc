import React, { Fragment, useState } from 'react';

import Standards from '../Standards';
import { factorHandler } from '../helpers/factorHandler';
import './Factor.scss';

import {ReactComponent as Chevron} from '../../../img/icons/chevron-down.svg';

const Factor = ({ factor, dispatch }) => {

    const [isHidden, setIsHidden] = useState(false);

    const fields = factorHandler(factor, dispatch, factor, "fields", isHidden);

    const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {

      const fields = factorHandler(sibling, dispatch, factor, "fields", isHidden);

      return(
        <Fragment key={sibling.name}>
          <div className="Factor__header">
            <h3 className="Factor__heading">{sibling.pretty || sibling.name}</h3>
          </div>
          <div className="Factor__fields">
            {fields}
          </div>

        </Fragment>
      )
    });

    const standards = !factor.standards ? null : (
      <Standards
        dispatch={dispatch}
        factor={factor}/>
    )

    const hideHandler = () => {
      if (factor.active) setIsHidden(prev => !prev);
    }

    const activeClass = factor.active ? "" : " Factor--disactive",
          hiddenClass = isHidden ? " Factor--hidden" : "";

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
          {fields}
        </div>
        {altFields}
        <div className="Factor__standards">
          {standards}
        </div>
      </div>
    )
};

export default Factor;
