import styled, { createGlobalStyle } from 'styled-components';
import { rem } from '@styles/functions';
import { colorPrimary, transitionSpeed } from '@styles/vars';

export const StyledApp = styled.div`
  background-color: ${props => props.theme.colorBack};
  min-height: 100vh;
  height: 100%;
  padding-top: ${rem(60)};
  padding-bottom: ${rem(140)};
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        ::selection {
            background-color: ${colorPrimary};
            color: white
        }
    }

    div {
        transition: background-color ${transitionSpeed};
    };

    h1, h2, h3, h4, h5, h6, p, input {
        transition: color ${transitionSpeed};
    }

    body {
        font-family: ${props => props.theme.fontPrimary};
        color: ${props => props.theme.colorFront};
    }

`;