import React from 'react';
import { H3 } from '@atoms/H3';
import Button from '@atoms/Button';
import styled from 'styled-components';
import { rem } from '@styles/functions';

const StyledFactorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${rem(10)};
`;

const FactorHeader = ({ heading, buttonText, buttonHandler, buttonStyle }) => (
    <StyledFactorHeader>
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