import styled from 'styled-components';
import { rem } from '@styles/functions';
import { bp } from '@styles/functions';

export const H1 = styled.h1`
    font-size: ${rem(18)};
    font-weight: 300;
    text-transform: uppercase;
    color: ${props => props.theme.colorFront};
    ${bp('md', `
        font-size: ${rem(20)};
    `)}
`;