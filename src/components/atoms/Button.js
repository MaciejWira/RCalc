import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: ${props => props.theme.colorFront};
    background-color: ${props => props.theme.colorBack};
    font-family: ${props => props.theme.fontPrimary};
    display: inline-flex;
    width: auto;
    border: none;
    border-radius: ${props => props.theme.rem(10)};
    box-shadow: ${props => props.theme.rem(5)} ${props => props.theme.rem(5)} ${props => props.theme.rem(5)} 0 rgba(0,0,0,.8), 
                ${props => props.theme.rem(2)} ${props => props.theme.rem(2)} ${props => props.theme.rem(2)} 0 rgba(256,256,256,.2) inset;
`;

const ClassicButton = styled(StyledButton)`
    padding: ${props => props.theme.rem(10)};
    font-weight: 600;
    white-space: nowrap;
`;

const RoundButton = styled(StyledButton)`
    justify-content: center;
    align-items: center;
    min-width: ${props => props.theme.rem(30)};
    width: ${props => props.theme.rem(30)};
    height: ${props => props.theme.rem(30)};
    line-height: 1;
    border-radius: 50%;
    background-color: transparent;
    font-size: ${props => props.theme.rem(20)};
    font-weight: 700;
`;

const types = {
    classic: ClassicButton,
    round: RoundButton,
}

const Button = ({ children, type = 'classic', ...others }) => {

    const ButtonComponent = types[type];

    return(
        <ButtonComponent {...others}>
            {children}
        </ButtonComponent>
    )
};

export default Button;