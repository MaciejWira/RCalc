import React from 'react';
import { useSelector } from 'react-redux';
import { header } from '@translations';
import styled from 'styled-components';
import Container from '@layouts/Container/index';
import { H1 } from '@atoms/H1';
const { heading } = header;

const StyledHeader = styled.header`
  padding-top: ${props => props.theme.rem(15)};
  padding-bottom: ${props => props.theme.rem(15)};
  background-color: ${props => props.theme.colorSubprimary};
  box-shadow: 0 0 ${props => props.theme.rem(15)} 0 rgba(black, .6);
  position: fixed;
  z-index: ${props => props.theme.ziHeader};
  top: 0;
  right: 0;
  left: 0;
  min-height: ${props => props.theme.pageTop};
  box-sizing: border-box;
`;

const Header = () => {

  const lang = useSelector(state => state.lang);

  return(
    <StyledHeader>
      <Container>
        <H1>{heading[lang]}</H1>
      </Container>
    </StyledHeader>
  )

};

export default Header;
