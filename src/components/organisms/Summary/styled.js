import styled from 'styled-components';
import { rem } from '@styles/functions';
import Box from '@layouts/Box/index';
import { relative } from '@styles/mixins';
import { bp } from '@styles/functions';
import Button from '@atoms/Button';
import { Paragraph } from '@atoms/textComponents';
import { H2 } from '@atoms/H2';
import { breakpoints } from '@styles/breakpoints';

export const SummaryContainer = styled.div.attrs(props => {

    if ( window.innerWidth >= breakpoints.md ){
        return {
                    style: {
                        transform: `translateY(${rem(props.scrollPosition)})`
                    }
                }
    }

})`
    opacity: ${props => props.opened ? '1' : '.9'};
    background-color: ${props => props.theme.colorBack};
    ${bp('md', `
        opacity: 1;
        transition: none;
    `)}
`;

export const SummaryContent = styled.div`
    display: flex;
    ${relative};
`;

export const SummaryMain = styled.div`
    width: 100%;
`;

export const StyledBox = styled(Box)`
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    ${bp('md', `
        border-bottom-left-radius: ${rem(10)};
        border-bottom-right-radius: ${rem(10)};
    `)}
`;

export const SummaryHeading = styled(H2)`
    margin-bottom: ${rem(5)};
    display: none;
    ${bp('md', `
        display: block;
        margin-bottom: ${rem(25)}
    `)}
`;

export const SummaryParagraph = styled(Paragraph)`
font-size: ${props => props.opened ? `${rem(14)}` : `${rem(10)}`};
margin-bottom: ${props => props.opened ? `${rem(5)}` : `${rem(1)}`};
${bp('md', `
font-size: ${rem(14)};
margin-bottom: ${rem(15)}
`)}
`;

export const ValueParagraph = styled.span`
    ${props => {
        if ( props.opened ){
            return`
                font-size: ${rem(16)};

            `;
        } else {
            return`
                font-size: ${rem(12)};
            `;
        }
    }}
    ${bp('md', `
        font-size: ${rem(18)}
    `)}

`;

export const StyledButton = styled(Button)`
    ${bp('md', `
        display: none;
    `)};
`;