import React, { Fragment, useState } from 'react';
import FactorHeader from '@molecules/FactorHeader';
import Fields from '@organisms/Fields';
import { useTranslations } from '@translations/useTranslations';
import { FieldsContainer, StyledFactor } from './styled';
import { content } from './content';
import Button from '@atoms/Button';
import { TOGGLE_ACTIVE, RESET_FACTOR } from '@organisms/Segment/helpers/segmentReducer';
import Box from '@layouts/Box/index';
import { useStore } from '@store/store';
import { SET_MODAL } from '@store/actions';

const Factor = ({ factor, dispatch }) => {

  const { t } = useTranslations( content );
  const globalDispatch = useStore().dispatch;

  const openStandards = () => {
    globalDispatch({ 
      type: SET_MODAL, 
      payload: {
        type: 'standards',
        opened: true,
        content: {
          factor, dispatch
        }
      }
    })
  }

  const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {

    return(
      <Fragment key={sibling.name}>
        <FactorHeader 
          isActive={factor.active}
          heading={t[sibling.name]} 
          />
        <FieldsContainer
              isActive={factor.active}
        >
            <Fields
                factor={sibling}
                mainFactor={factor}
                dispatch={dispatch}
            />
        </FieldsContainer>
      </Fragment>
    )
  });

  return(
    <Box>
      <StyledFactor
        isActive={factor.active}
      >
          <FactorHeader
              isActive={factor.active}
              factorName={factor.name}
              removeHandler={() => dispatch({ type: TOGGLE_ACTIVE, payload: factor.name })}
              resetHandler={() => dispatch({ type: RESET_FACTOR, payload: factor.name })}
              buttonStyle={factor.active ? null : {display: "none"}}
              />
          <FieldsContainer
              isActive={factor.active}
          >
              <Fields 
                  factor={factor}
                  dispatch={dispatch}
                  />
          </FieldsContainer>
          { altFields }
      { !factor.standards || !factor.active ? null : (
        <Button
            type='padded'
            onClick={openStandards}
            >
            {t.standardVal}
        </Button>
      )}
      </StyledFactor>
    </Box>
    )
};

export default Factor;
