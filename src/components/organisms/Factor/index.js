import { Fragment, useState } from 'react';
import FactorHeader from '@molecules/FactorHeader';
import Fields from '@organisms/Fields';
import { useTranslations } from '@translations/useTranslations';
import { FieldsContainer, StyledFactor } from './styled';
import { content } from './content';
import Button from '@atoms/Button';
import Box from '@layouts/Box/index';
import { useStore } from '@store/store';
import { SET_MODAL } from '@store/actions';

const Factor = ({ factor, segmentActions }) => {

  const { t } = useTranslations( content );
  const globalDispatch = useStore().dispatch;

  const openStandards = () => {
    globalDispatch({ 
      type: SET_MODAL, 
      payload: {
        type: 'standards',
        opened: true,
        content: {
          factor, handler: segmentActions.UPDATE_FULL_SUM
        }
      }
    })
  }

  const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {

    return(
      <Fragment key={sibling.name}>
        <FactorHeader 
          isActive={factor.active}
          factorName={sibling.name}
          />
        <FieldsContainer
              isActive={factor.active}
        >
            <Fields
                factor={sibling}
                mainFactor={factor}
                segmentActions={segmentActions}
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
              removeHandler={() => segmentActions.TOGGLE_ACTIVE(factor.name)}
              resetHandler={() => segmentActions.RESET_FACTOR(factor.name)}
              buttonStyle={factor.active ? null : {display: "none"}}
              />
          <FieldsContainer
              isActive={factor.active}
          >
              <Fields 
                  factor={factor}
                  segmentActions={segmentActions}
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
