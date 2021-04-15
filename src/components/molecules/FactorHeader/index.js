import React from 'react';
import { H3 } from '@atoms/H3';
import Button from '@atoms/Button';
import styled from 'styled-components';

const StyledFactorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid ${props => props.theme.rem(1)} ${props => props.theme.colorPrimary};
    margin-bottom: ${props => props.theme.rem(15)};
    min-height: ${props => props.theme.rem(30)};
`;

const StyledButton = styled(Button)`
  background-color: ${props => props.theme.colorPrimary};
  width: auto;
  border: none;
  color: white;
  text-transform: uppercase;
  font-size: ${props => props.theme.rem(12)};
  font-weight: 700;
  padding: ${props => props.theme.rem(5)};
`

const FactorHeader = ({ heading, buttonText, buttonHandler, buttonStyle }) => (
    <StyledFactorHeader>
        <H3>{heading}</H3>
        { !buttonText || !buttonHandler ? null : (
            <StyledButton
                style={buttonStyle}
                onClick={buttonHandler}>
                {buttonText}
            </StyledButton>
        )}
    </StyledFactorHeader>
)

export default FactorHeader;