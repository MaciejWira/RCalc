import React from 'react';
import { H3 } from '@atoms/H3';
import Button from '@atoms/Button';
import styled from 'styled-components';
import { rem } from '@styles/functions';

const StyledFactorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props => {
        if ( !props.isActive ){
            return`
                padding-top: ${rem(10)}
            `
        } else {
            return`
               margin-bottom: ${rem(10)};
            `
        }
    }}
`;

const FactorHeader = ({ isActive, heading, buttonText, buttonHandler, buttonStyle }) => (
    <StyledFactorHeader isActive={isActive}>
        <H3>{heading}</H3>
        { !buttonText || !buttonHandler ? null : (
            <Button
                style={buttonStyle}
                type='padded color-primary'
                onClick={buttonHandler}>
                {buttonText}
            </Button>
        )}
    </StyledFactorHeader>
)

export default FactorHeader;