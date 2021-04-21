import styled from 'styled-components';
import { rem } from '@styles/functions';

export const H3 = styled.h3`
    color: ${props => props.theme.colorFront};
    text-align: left;
    font-size: ${rem(16)};
    text-transform: uppercase;
    font-weight: 400;
    padding-right: ${rem(15)};
`;