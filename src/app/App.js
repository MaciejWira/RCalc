import Header from '@organisms/Header';
import Calculator from "@organisms/Calculator";
import { ThemeProvider } from 'styled-components';

import Modal from '@layouts/Modal';
import { mainTheme, darkTheme, lightTheme } from '@styles/themes';
import { GlobalStyle, StyledApp } from './styled';
import '@styles/global.scss';
import { useStore } from '@store/store';
import Footer from '@organisms/Footer/index';

const App = () => {
  
  const { globalState: { theme } } = useStore();
  const additionalTheme = theme === 'dark' ? darkTheme : lightTheme;

  return(
    <ThemeProvider theme={{ ...mainTheme, ...additionalTheme }}>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Calculator />
        <Footer />
      </StyledApp>
      <Modal />
    </ThemeProvider>
  )

}

export default App;
