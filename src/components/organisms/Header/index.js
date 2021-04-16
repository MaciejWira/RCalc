import React from 'react';
import Container from '@layouts/Container/index';
import { H1 } from '@atoms/H1';
import { StyledHeader } from './styled';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';

const Header = () => {

  const { t } = useTranslations(content);

  return(
    <StyledHeader>
      <Container>
        <H1>{t.heading}</H1>
      </Container>
    </StyledHeader>
  )

};

export default Header;
