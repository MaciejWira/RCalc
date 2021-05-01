import styled from 'styled-components';
import { rem } from '@styles/functions';

export const StyledFactorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props => {
        if ( !props.isActive ){
            return`
                padding-top: ${rem(10)}
            `
        } else {
            return`
            margin-bottom: ${rem(10)};
            `
        }
    }}
`;

export const Buttons = styled.div`

`;

