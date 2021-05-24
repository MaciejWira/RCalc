import styled from 'styled-components';
import Container from '@layouts/Container/index';
import { rem } from '@styles/functions';
import ThemeSwitcher from '@molecules/ThemeSwitcher/index';
import { ziHeader, transitionSpeed } from '@styles/vars';

const scaleRatio = .8;

export const StyledHeader = styled.header`
  background-color: ${props => props.theme.colorBack};
  box-shadow: 0 0 ${rem(55)} 0 ${props => props.theme.shadowPrimary};
  position: fixed;
  z-index: ${ziHeader};
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  transition: background-color ${transitionSpeed}, transform ${transitionSpeed};
`;

export const HeaderContainer = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => {
    if ( props.scroll > 25 ) return `${scaleRatio * 60}px`;
    else return 60 + 'px';
  }};
  transition: height ${transitionSpeed};
`;

export const Utils = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${props => {
    if ( props.scroll > 25 ){
      return`
        transform: scale(${scaleRatio})
      `;
    }
  }};
  transition: transform ${transitionSpeed};
`;

export const StyledThemeSwitcher = styled(ThemeSwitcher)`
  margin-right: ${rem(10)};
`;
