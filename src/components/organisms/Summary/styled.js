import styled from 'styled-components';
import { rem } from '@styles/functions';
import Box from '@layouts/Box/index';
import { relative } from '@styles/mixins';
import { bp } from '@styles/functions';
import Button from '@atoms/Button';
import { Paragraph } from '@atoms/textComponents';
import { H2 } from '@atoms/H2';
import { breakpoints } from '@styles/breakpoints';
import { transitionSpeed } from '@styles/vars';

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
    transition: transform ${transitionSpeed};
    ${props => {
        if ( props.summaryOpened === 0 ){
            return`
                transform: translateY(calc(100% - 60px));
            `;
        }
    }}
    ${bp('md', `
        background-color: transparent;
        opacity: 1;
        transform: none;
    `)}
`;

export const SummaryContent = styled.div`
    display: flex;
    justify-content: space-between;
    ${relative};
`;

export const SegmentsWrapper = styled.div`
    opacity: ${props => props.summaryOpened === 0 ? '0' : '1'};
    visibility: ${props => props.summaryOpened === 0 ? 'hidden' : 'visible'};
    transition: opacity ${transitionSpeed};
    ${bp('md', `
        opacity: 1;
        visibility: visible;
    `)}
`;

export const SummaryMain = styled.div`
    width: 100%;
    flex-grow: 1;
`;

export const ContainerBox = styled(Box)`
    margin-bottom: 0;
    border-radius: 0;
    padding-bottom: 0;
    ${bp('md', `
        border-radius: ${rem(10)};
        padding-bottom: ${rem(25)};
    `)}
`;

export const ContentBox = styled(Box)`
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    ${bp('md', `
        border-bottom-left-radius: ${rem(10)};
        border-bottom-right-radius: ${rem(10)};
    `)}
`;

export const SummaryHeading = styled(H2)`
    display: none;
    ${bp('md', `
        ${relative};
        margin-bottom: ${rem(5)};
        display: block;
        margin-bottom: ${rem(20)}
    `)}
`;

export const SummaryHeadingMini = styled(H2)`
    font-size: ${rem(20)};
    margin-bottom: ${rem(5)};
    ${bp('md', `
        display: none;
    `)}
`;

export const SummaryParagraph = styled(Paragraph)`
    font-size: ${props => props.opened === 2 ? `${rem(14)}` : `${rem(10)}`};
    margin-bottom: ${props => props.opened === 2 ? `${rem(5)}` : `${rem(1)}`};
    ${bp('md', `
        font-size: ${rem(14)};
        margin-bottom: ${rem(15)};
    `)}
    ${bp('lg', `
        font-size: ${rem(16)};
    `)}
`;

export const ValueParagraph = styled.span`
    ${props => {
        if ( props.opened === 2 ){
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
        font-size: ${rem(18)};
    `)}
    ${bp('lg', `
        font-size: ${rem(20)};
    `)}

`;

export const Buttons = styled.div`
    display: inline-flex;
    flex-direction: column;
    ${bp('md', `
        display: none;
    `)};
`;

const StyledButton = styled(Button)`
    margin-bottom: ${rem(7)};
    ${bp('md', `
        display: none;
    `)};
`;

export const ButtonUp = styled(StyledButton)`
    opacity: ${props => props.summaryOpened === 2 ? '0' : '1'};
    visibility: ${props => props.summaryOpened === 2 ? 'hidden' : 'visible'};
    display: ${props => props.summaryOpened === 2 ? 'none' : ''};
    transition: opacity ${transitionSpeed};
`;

export const ButtonDown = styled(StyledButton)`
    opacity: ${props => props.summaryOpened === 0 ? '0' : '1'};
    visibility: ${props => props.summaryOpened === 0 ? 'hidden' : 'visible'};
    transition: opacity ${transitionSpeed}
`;