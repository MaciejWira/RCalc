import styled from 'styled-components';
import { Paragraph } from '@atoms/textComponents';
import { rem, bp } from '@styles/functions';
import Input from '@atoms/Input';

export const Container = styled.div`
    text-align: center;
    padding-top: ${rem(10)};
    padding-bottom: ${rem(10)};
    ${bp('md', `
        padding-left: ${rem(10)};
        padding-right: ${rem(10)}
    `)}
`;

export const StyledParagraph = styled(Paragraph)`
    margin-bottom: ${rem(12)};
    ${bp('sm', `
        margin-bottom: ${rem(15)};
        font-size: ${rem(16)}
    `)};
    ${bp('md', `
        font-size: ${rem(18)}
    `)};
`;

export const StyledInput = styled(Input)`
    margin-bottom: ${rem(20)};
    ${bp('sm', `
        margin-bottom: ${rem(25)}
    `)}
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
        margin-left: ${rem(4)};
        margin-right: ${rem(4)};
        ${bp('sm', `
            margin-left: ${rem(5)};
            margin-right: ${rem(5)};
        `)}
    }
`;