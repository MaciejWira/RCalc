import { transitionSpeed, colorPrimary } from '@styles/vars';
import { rem } from '@styles/functions';
import styled from 'styled-components';
import { bp } from '@styles/functions';

export const Paragraph = styled.p`
    font-size: ${rem(14)};
    ${props => {
        if ( props.size?.indexOf('tiny') >= 0 ){
            return`
                font-size: ${rem(10)};
                ${bp('md',`
                    font-size: ${rem(14)};
                `)};
            `;
        }
        
        if ( props.size?.indexOf('small') >= 0 ){
            return`
                font-size: ${rem(12)};
            `;
        }
        
        if ( props.size?.indexOf('large') >= 0 ){
            return`
                font-size: ${rem(18)};
            `;
        }
    }};
    transition: font-size ${transitionSpeed}, margin ${transitionSpeed};
    ${props => props.addStyle}
`;

export const TextBold = styled.span`
    font-weight: 600;
`;

export const ColoredBold = styled.span`
    font-weight: 800;
    color: ${colorPrimary};
`;