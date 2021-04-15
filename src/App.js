import React from 'react';
import Header from '@organisms/Header';
import Calculator from "@organisms/Calculator";
import styled, { ThemeProvider } from 'styled-components';

import '@styles/global.scss';
import Modal from '@organisms/Modal';
import { darkTheme, mainTheme } from './styles/themes';

const StyledApp = styled.div`
  background-image: linear-gradient(to top, ${props => props.theme.colorSubprimaryDark}, black);
  color: white;
  min-height: 100vh;
  height: 100%;
  padding-top: ${props => props.theme.pageTop};
  padding-bottom: ${props => props.theme.rem(100)};
`;

const App = () => (
  <ThemeProvider theme={{ ...mainTheme, ...darkTheme }}>
    <StyledApp>
      <Header />
      <Calculator />
      {/* <Modal /> */}
    </StyledApp>
  </ThemeProvider>
)

export default App;
