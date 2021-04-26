import styled from 'styled-components';
import Container from '@layouts/Container/index';
import { rem } from '@styles/functions';
import ThemeSwitcher from '@molecules/ThemeSwitcher/index';
import { ziHeader, transitionSpeed } from '@styles/vars';

export const StyledHeader = styled.header`
  padding-top: ${rem(15)};
  padding-bottom: ${rem(15)};
  background-color: ${props => props.theme.colorBack};
  box-shadow: 0 0 ${rem(55)} 0 ${props => props.theme.shadowPrimary};
  position: fixed;
  z-index: ${ziHeader};
  top: 0;
  right: 0;
  left: 0;
  min-height: ${props => props.theme.pageTop};
  box-sizing: border-box;
  transition: background-color ${transitionSpeed};
`;

export const HeaderContainer = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Utils = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledThemeSwitcher = styled(ThemeSwitcher)`
  margin-right: ${rem(15)};
`;
