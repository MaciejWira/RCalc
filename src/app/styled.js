import styled, { createGlobalStyle } from 'styled-components';

export const StyledApp = styled.div`
  background-color: ${props => props.theme.colorBack};
  min-height: 100vh;
  height: 100%;
  padding-top: ${props => props.theme.pageTop};
  padding-bottom: ${props => props.theme.rem(100)};
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${props => props.theme.fontPrimary};
        color: ${props => props.theme.colorFront}
    }

`;