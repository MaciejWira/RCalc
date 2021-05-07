import styled from 'styled-components';
import { rem } from '@styles/functions';
import { bp } from '@styles/functions';

export const H2 = styled.h2`
    color: ${props => props.theme.colorFront};
    font-size: ${rem(24)};
    ${bp('sm', `
        font-size: ${rem(28)};
    `)}
`;