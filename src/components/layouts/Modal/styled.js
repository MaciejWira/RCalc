import styled from 'styled-components';
import { ziModal, transitionSpeed } from '@styles/vars';
import { rgba } from 'polished';
import Button from '@atoms/Button';
import { rem } from '@styles/functions';
import Box from '@layouts/Box/index';
import { relative } from '@styles/mixins';
import { bp } from '../../../styles/functions';

export const ModalContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: ${ziModal};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => {
    const color = props.theme.dark ? 'black' : 'grey';
    return `
      background-color: ${rgba(color, .75)};
    `
  }}
  padding: ${rem(25)};
  transition: opacity ${transitionSpeed}, visibility ${transitionSpeed};
  ${props => {
    if ( props.opened ){
      return `
          opacity: 1;
          visibility: visible;
          `
    }
  }};
`;

export const ModelMain = styled.div`
  position: relative;
`;

export const ModelContent = styled.div`
  ${relative}
`;

export const ModalBox = styled(Box)`
  background-color: ${props => props.theme.colorBack};
  padding: ${rem(20)};
  ${bp('md', `
    padding: ${rem(25)};
  `)}
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(30%, -30%)
`;