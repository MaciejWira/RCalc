import { rem } from '@styles/functions';
import styled from 'styled-components';
import { bp } from '@styles/functions';
import Button from '@atoms/Button';

export const ButtonWrapper = styled.div`
  padding-top: ${rem(10)};
  display: inline-flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  ${bp('lg', `
    font-size: ${rem(16)}
  `)};
`;