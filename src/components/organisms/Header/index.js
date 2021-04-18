import React from 'react';
import { HeaderContainer, StyledHeader } from './styled';
import LangSwitcher from '../../molecules/LangSwitcher/index';
import Logo from '@molecules/Logo/index';
import ThemeSwitcher from '../../molecules/ThemeSwitcher/index';

const Header = () => {

  return(
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <ThemeSwitcher />
        <LangSwitcher />
      </HeaderContainer>
    </StyledHeader>
  )

};

export default Header;
