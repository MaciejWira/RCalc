import React from 'react';
import styled from 'styled-components';
import { rem } from '@styles/functions';
import { buttonSizePrimary, transitionPrimary, transitionSpeed, colorPrimary, colorLight, colorPrimaryDark } from '@styles/vars';
import { rgba } from 'polished';

const Button = ({ children, ...others }) => (
        <button {...others}>
            {children}
        </button>
    )

const StyledButton = styled(Button)`
    font-size: ${rem(13)};
    cursor: pointer;
    color: ${props => props.theme.colorFront};
    background-color: ${props => props.theme.colorBack};
    font-family: ${props => props.theme.fontPrimary};
    display: inline-flex;
    width: auto;
    border: none;
    justify-content: center;
    align-items: center;
    line-height: 1;
    padding: ${rem(3)};
    border-radius: ${rem(10)};
    transition: ${transitionPrimary}, box-shadow ${transitionSpeed};
    box-shadow: ${props => props.theme.boxShadowPrimary}, 
                ${props => props.theme.boxShadowInsetPrimary};

    :hover {
        background-color: ${colorPrimary};
        color: ${colorLight};
    }

    ${ props => {

        let additionalStyles = '';

        if ( props.type?.indexOf('round') >= 0 ){
            additionalStyles += `
                min-width: ${buttonSizePrimary};
                width: ${buttonSizePrimary};
                height: ${buttonSizePrimary};
                border-radius: 50%;
            `
        }

        if ( props.type?.indexOf('padded') >= 0 ){
            additionalStyles += `
                padding: ${rem(10)};
            `
        }

        if ( props.type?.indexOf('color-primary') >= 0 ){
            additionalStyles += `
                background-color: ${colorPrimary};
                color: ${colorLight};
                :hover {
                    background-color: ${colorPrimaryDark}
                }
            `
        }

        return additionalStyles;
        
    }}

    :focus {
        outline: none;
        box-shadow: 0 0 ${rem(15)} 0 ${rgba( colorPrimary, .9)}
    }

    :active {
        box-shadow: 0 0 ${rem(15)} 0 black inset;
    }

`;

export default StyledButton;