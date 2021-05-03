import React from 'react';
import styled from 'styled-components';
import { rem } from '@styles/functions';
import { buttonSizePrimary, transitionPrimary, transitionSpeed, colorPrimary, colorLight, colorPrimaryLight } from '@styles/vars';
import { rgba } from 'polished';
import { bp } from '@styles/functions';

const Button = ({ children, additionalStyles, ...others }) => (
        <button {...others}>
            {children}
        </button>
    )

const StyledButton = styled(Button)`
    font-size: ${rem(12)};
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

    ${bp('sm', `
        font-size: ${rem(13)}
    `)};

    ${bp('md', `
        font-size: ${rem(14)}
    `)};

    :hover {
        background-color: ${colorPrimary};
        color: ${colorLight};
    }

    :focus, :focus-visible {
        outline: none;
        box-shadow: 0 0 ${rem(15)} 0 ${rgba( colorPrimary, .9)};
        border: none;
    }

    :active {
        box-shadow: 0 0 ${rem(15)} 0 black inset;
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
                padding: ${rem(10)} ${rem(7)};
                ${bp('sm', `
                    padding-right: ${rem(10)};
                    padding-left: ${rem(10)};
                `)};
            `
        }

        if ( props.type?.indexOf('color-primary') >= 0 ){
            additionalStyles += `
                background-color: ${colorPrimary};
                color: ${colorLight};
                :hover {
                    background-color: ${colorPrimaryLight}
                }
            `
        }

        if ( props.type?.indexOf('font-big') >= 0 ){
            additionalStyles += `
                font-size: ${rem(28)};
                font-weight: 300;
                ${bp('sm', `
                    font-size: ${rem(32)}
                `)};
            `
        }

        if ( props.type?.indexOf('minimal') >= 0 ){
            additionalStyles += `
                border-radius: 0;
                box-shadow: none;
                padding: 0;
                background-color: transparent;
                :hover {
                    background-color: transparent;
                    color: ${colorPrimary}
                }
                :focus, :focus-visible {
                    box-shadow: none;
                    color: ${colorPrimary};
                }
                :active {
                    box-shadow: none;
                    color: ${props.theme.colorFront};
                }
            `
        }

        if ( props.additionalStyles ){
            additionalStyles += props.additionalStyles
        }


        return additionalStyles;
        
    }}

`;

export default StyledButton;