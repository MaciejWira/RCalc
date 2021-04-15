import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: red;
    border: none;
    color: white;
    padding: ${props => props.theme.rem(10)};
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    white-space: nowrap;
`;

const Button = ({ children, ...others }) => (
    <StyledButton {...others}>
        {children}
    </StyledButton>
);

export default Button;