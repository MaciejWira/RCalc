import { HeaderContainer, StyledHeader, Utils, StyledThemeSwitcher } from './styled';
import LangSwitcher from '@molecules/LangSwitcher/index';
import Logo from '@molecules/Logo/index';

const Header = () => {

  return(
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Utils>
          <StyledThemeSwitcher />
          <LangSwitcher />
        </Utils>
      </HeaderContainer>
    </StyledHeader>
  )

};

export default Header;
