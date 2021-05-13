import { colorPrimary } from '@styles/vars';
import styled from 'styled-components';
import { rem } from '@styles/functions';
import { bp } from '@styles/functions';

export const StyledLogo = styled.h1`
    font-size: ${rem(24)};
    font-weight: 900;
    display: flex;
    align-items: center;
    ${bp('lg', `
        font-size: ${rem(28)}
    `)}
`;

export const StyleOne = styled.span`
    color: ${colorPrimary};
`;

export const StyleTwo = styled.span`
`;