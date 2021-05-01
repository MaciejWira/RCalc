import styled from 'styled-components';
import Button from '@atoms/Button';
import { rem } from '@styles/functions';
import { ColoredBold } from '@atoms/textComponents';
import { bp } from '@styles/functions';

export const StyledField = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-direction: column;
  padding-right: ${rem(15)};
  margin-bottom: ${rem(10)};
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
  box-sizing: content-box;
  margin: 0;
  background-color: transparent;
  color ${props => props.theme.colorFront};
  border: none;
  font-weight: 800;
  overflow-x: visible;
  text-align: right;
  ${props => {
    if ( props.isActive ){
      return`
        height: ${rem(36)};
        font-size: ${rem(36)};
        width: ${rem(25 * props.value.toString().length)};
        padding-left: ${rem(15)};
        padding-right: ${rem(5)};
        ${bp('lg', `
          font-size: ${rem(42)};
          width: ${rem(28 * props.value.toString().length)};
        `)}
      `;
    } else {
      return`
        height: auto;
        font-size: ${rem(28)};
        width: ${rem(20 * props.value.toString().length)};
        padding-left: 0;
        padding-right: ${rem(3)};
      `
    }
  }}

  :focus {
    outline: none;
  }
`;

export const Span = styled(ColoredBold)`
  font-size: ${props => props.isActive ? rem(16) : rem(12)};
`;