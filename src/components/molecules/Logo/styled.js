import { colorPrimary } from '@styles/vars';
import styled from 'styled-components';
import { rem } from '@styles/functions';
import { bp } from '@styles/functions';

export const StyledLogo = styled.h1`
    font-size: ${rem(24)};
    font-weight: 900;
    ${bp('lg', `
        font-size: ${rem(28)}
    `)}
`;

export const Run = styled.span`
    color: ${colorPrimary};
    margin-right: ${rem(1)}
`;

export const Calc = styled.span`
    font-weight: 300;
`;