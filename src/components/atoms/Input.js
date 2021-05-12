import styled from 'styled-components';
import { rem, bp } from '@styles/functions';
import { focus } from '@styles/mixins';
import { transitionPrimary, transitionSpeed } from '@styles/vars';

const Input = styled.input`
    padding: ${rem(7)};
    border: none;
    font-family: ${props => props.theme.fontPrimary};
    max-width: 100%;
    transition: ${transitionPrimary}, box-shadow ${transitionSpeed};
    ${focus};
    ${bp('sm', `
        font-size: ${rem(16)};
        padding: ${rem(10)};
    `)}
`;
 
export default Input;