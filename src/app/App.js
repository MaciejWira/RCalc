import Header from '@organisms/Header';
import Calculator from "@organisms/Calculator";
import { ThemeProvider } from 'styled-components';

import Modal from '@organisms/Modal';
import { darkTheme, mainTheme } from '@styles/themes';
import { GlobalStyle, StyledApp } from './styled';
import '@styles/global.scss';

const App = () => (
  <ThemeProvider theme={{ ...mainTheme, ...darkTheme }}>
    <GlobalStyle />
    <StyledApp>
      <Header />
      <Calculator />
      {/* <Modal /> */}
    </StyledApp>
  </ThemeProvider>
)

export default App;
