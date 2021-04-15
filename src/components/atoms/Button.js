import React from 'react';
import styled from 'styled-components';

const ClassicButton = styled.button`
    background-color: ${props => props.theme.colorSubprimary};
    border: none;
    color: white;
    padding: ${props => props.theme.rem(10)};
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    white-space: nowrap;
`;

const RoundButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: ${props => props.theme.rem(30)};
    width: ${props => props.theme.rem(30)};
    height: ${props => props.theme.rem(30)};
    line-height: 1;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: transparent;
    color: white;
    border: solid ${props => props.theme.rem(4)} ${props => props.theme.colorSubprimary};
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