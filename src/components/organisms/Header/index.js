import React from 'react';
import { HeaderContainer, StyledHeader } from './styled';
import LangSwitcher from '../../molecules/LangSwitcher/index';
import Logo from '@molecules/Logo/index';

const Header = () => {

  return(
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <LangSwitcher />
      </HeaderContainer>
    </StyledHeader>
  )

};

export default Header;
