import React, { Fragment } from 'react';
import FactorHeader from '@molecules/FactorHeader';
import styled from 'styled-components';
import Fields from '@organisms/Fields';
import Button from '@atoms/Button';

const StyledFactor = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: ${props => props.theme.rem(45)};
`;

const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
    padding-top: ${props => props.theme.rem(10)};
    display: flex;
    justify-content: flex-start;
`;

const StandardsButton = styled(Button)`
  background-color: ${props => props.theme.colorPrimary};
  width: auto;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: ${props => props.theme.rem(12)};
  font-weight: 700;
  padding: ${props => props.theme.rem(5)};
`

const Factor = ({ factor, dispatch }) => {

  const altFields = !factor.siblings ? null : factor.siblings.map(sibling => {
    return(
      <Fragment key={sibling.name}>
        <FactorHeader heading={sibling.pretty || sibling.name} />
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
      <StyledFactor>
          <FactorHeader
              heading={factor.pretty || factor.name}
              buttonText='Dezaktywuj'
              buttonHandler={() => dispatch({ type: 'toggleActive', payload: factor.name })}
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
              <StandardsButton
                  // onClick={() => setOpenedModal(true)}
                  >
                  Standardowe wartości
              </StandardsButton>
          </ButtonWrapper>
      </StyledFactor>
    )
};

export default Factor;
