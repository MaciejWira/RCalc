import styled from 'styled-components';
import Button from '../../atoms/Button';

export const StyledField = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.rem(10)};
  padding-right: ${props => props.theme.rem(15)};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const Buttons = styled.div`
    ${props => props.isActive ? '' : 'display: none;'}
`;

export const StyledButton = styled(Button)`
  :focus {
    outline: none;
  }
  :active {
    background-color: white;
    color: black
  }
`;

export const Input = styled.input`
  text-align: left;
  height: ${props => props.theme.rem(36)};
  width: 100%;
  padding-left: ${props => props.theme.rem(15)};
  padding-right: ${props => props.theme.rem(7)};
  margin: 0;
  background-color: transparent;
  color: white;
  border: none;
  font-size: ${props => props.theme.rem(36)};
  font-weight: 800;
  transition: width .05s;
  overflow-x: visible;
  ${props => props.isActive ? '' : `
    height: auto;
    padding-left: 0;
    padding-right: ${props.theme.rem(3)};
    font-size: ${props.theme.rem(28)};
    font-weight: 800;
  `}
`;

export const Span = styled.span`
  font-size: ${props => props.theme.rem(14)};
  ${props => props.isActive ? '' : `font-size: ${props.theme.rem(12)};`}
`;