import Header from '@organisms/Header';
import Calculator from "@organisms/Calculator";
import { ThemeProvider } from 'styled-components';

import Modal from '@organisms/Modal';
import { mainTheme, darkTheme, lightTheme } from '@styles/themes';
import { GlobalStyle, StyledApp } from './styled';
import '@styles/global.scss';
import { useStore } from '@store/store';

const App = () => {
  
  const { globalState: { theme } } = useStore();
  const additionalTheme = theme === 'dark' ? darkTheme : lightTheme;

  return(
    <ThemeProvider theme={{ ...mainTheme, ...additionalTheme }}>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Calculator />
        {/* <Modal /> */}
      </StyledApp>
    </ThemeProvider>
  )

}

export default App;
