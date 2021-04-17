import React from 'react';
import { H1 } from '@atoms/H1';
import { HeaderContainer, StyledHeader } from './styled';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import LangSwitcher from '../../molecules/LangSwitcher/index';

const Header = () => {

  const { t } = useTranslations(content);

  return(
    <StyledHeader>
      <HeaderContainer>
        <H1>{t.heading}</H1>
        <LangSwitcher />
      </HeaderContainer>
    </StyledHeader>
  )

};

export default Header;
