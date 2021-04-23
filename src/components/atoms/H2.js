import styled from 'styled-components';
import { rem } from '@styles/functions';

export const H2 = styled.h2`
    color: ${props => props.theme.colorFront};
    margin-bottom: ${rem(18)};
    font-size: ${rem(24)};
`;