import styled from 'styled-components';
import Button from '@atoms/Button';
import { rem } from '@styles/functions';
import { colorPrimary } from '@styles/vars';

export const StyledField = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem(10)};
  padding-right: ${rem(15)};
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
    display: flex;
    flex-direction: column;
    ${props => props.isActive ? '' : 'display: none;'}
`;

export const StyledButton = styled(Button)`
  margin-top: ${rem(2)};
  margin-bottom: ${rem(2)};
`;

export const Input = styled.input`
  color: ${props => props.theme.colorFront};
  text-align: left;
  height: ${rem(36)};
  width: ${props => {
    return rem(25 * props.value.toString().length)
  }};
  box-sizing: content-box;
  padding-left: ${rem(15)};
  padding-right: ${rem(5)};
  margin: 0;
  background-color: transparent;
  color ${props => props.theme.colorFront};
  border: none;
  font-size: ${rem(36)};
  font-weight: 800;
  overflow-x: visible;
  text-align: right;
  ${props => props.isActive ? '' : `
    height: auto;
    width: ${rem(20 * props.value.toString().length)};
    padding-left: 0;
    padding-right: ${rem(3)};
    font-size: ${rem(28)};
    font-weight: 800;
  `}

  :focus {
    outline: none;
  }
`;

export const Span = styled.span`
  font-size: ${rem(16)};
  font-weight: 800;
  color: ${props => props.theme.colorFront};
  color: ${colorPrimary};
  ${props => props.isActive ? '' : `font-size: ${rem(12)};`}
`;