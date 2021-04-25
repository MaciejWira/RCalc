import { transitionSpeed } from '@styles/vars';
import { rem } from '@styles/functions';
import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: ${rem(14)};
    ${props => {
        if ( props.size?.indexOf('tiny') >= 0 ){
            return`
                font-size: ${rem(10)};
            `;
        }
        
        if ( props.size?.indexOf('small') >= 0 ){
            return`
                font-size: ${rem(12)};
            `;
        }
    }};
    transition: font-size ${transitionSpeed}, margin-top ${transitionSpeed};
    ${props => props.addStyle}
`;

export const TextBold = styled.span`
    font-weight: 600;
`;