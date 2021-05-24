import { HeaderContainer, StyledHeader, Utils, StyledThemeSwitcher } from './styled';
import LangSwitcher from '@molecules/LangSwitcher/index';
import Logo from '@molecules/Logo/index';
import useHeader from './useHeader';

const Header = () => {

  const { windowScroll } = useHeader();

  return(
    <StyledHeader>
      <HeaderContainer scroll={windowScroll}>
        <Logo scroll={windowScroll} />
        <Utils scroll={windowScroll}>
          <StyledThemeSwitcher />
          <LangSwitcher />
        </Utils>
      </HeaderContainer>
    </StyledHeader>
  )

};

export default Header;
