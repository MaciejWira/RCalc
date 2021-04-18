import styled from 'styled-components';
import Container from '@layouts/Container/index';

export const StyledHeader = styled.header`
  padding-top: ${props => props.theme.rem(15)};
  padding-bottom: ${props => props.theme.rem(15)};
  background-color: ${props => props.theme.colorBack};
  box-shadow: 0 0 ${props => props.theme.rem(45)} 0 black;
  position: fixed;
  z-index: ${props => props.theme.ziHeader};
  top: 0;
  right: 0;
  left: 0;
  min-height: ${props => props.theme.pageTop};
  box-sizing: border-box;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
