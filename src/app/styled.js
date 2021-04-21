import styled, { createGlobalStyle } from 'styled-components';
import { rem } from '@styles/functions';
import { transitionPrimary } from '@styles/vars';
import { colorPrimary } from '@styles/vars';

export const StyledApp = styled.div`
  background-color: ${props => props.theme.colorBack};
  min-height: 100vh;
  height: 100%;
  padding-top: ${rem(60)};
  padding-bottom: ${rem(100)};
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: ${transitionPrimary};
        ::selection {
            background-color: ${colorPrimary};
            color: white
        }
    }

    body {
        font-family: ${props => props.theme.fontPrimary};
        color: ${props => props.theme.colorFront};
    }

`;