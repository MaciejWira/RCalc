import React, { Fragment } from 'react';
import FactorHeader from '@molecules/FactorHeader';
import Fields from '@organisms/Fields';
import { useTranslations } from '@translations/useTranslations';
import { FieldsContainer, StyledFactor, ButtonWrapper } from './styled';
import { translations } from '@helpers/initialSegment';
import { content } from './content';
import Button from '@atoms/Button';
import { TOGGLE_ACTIVE } from '@organisms/Segment/helpers/segmentReducer';
import Box from '@layouts/Box/index';

const Factor = ({ factor, dispatch }) => {

  const { t } = useTranslations( translations, content );

  const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {

    return(
      <Fragment key={sibling.name}>
        <FactorHeader heading={t[sibling.name]} isSibling={true}/>
        <FieldsContainer>
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
        <StyledFactor>
            <FactorHeader
                heading={t[factor.name]}
                buttonText={t.deactivate}
                buttonHandler={() => dispatch({ type: TOGGLE_ACTIVE, payload: factor.name })}
                buttonStyle={factor.active ? null : {display: "none"}}
                />
            <FieldsContainer>
                <Fields 
                    factor={factor}
                    dispatch={dispatch}
                    />
            </FieldsContainer>
            { altFields }
            <ButtonWrapper>
                <Button
                    type='padded'
                    // onClick={() => setOpenedModal(true)}
                    >
                    {t.standardVal}
                </Button>
            </ButtonWrapper>
        </StyledFactor>
      </Box>
    )
};

export default Factor;
