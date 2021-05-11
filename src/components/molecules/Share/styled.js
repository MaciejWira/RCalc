import styled from 'styled-components';
import { Paragraph } from '@atoms/textComponents';
import { rem } from '@styles/functions';

export const Container = styled.div`
    text-align: center;
`;

export const StyledParagraph = styled(Paragraph)`
    margin-top: ${rem(15)};
    margin-bottom: ${rem(12)};
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
        margin-left: ${rem(2)};
        margin-right: ${rem(2)};
    }
`;