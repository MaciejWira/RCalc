import styled from 'styled-components';
import { rem } from '@styles/functions';
import Box from '@layouts/Box/index';
import { transitionSpeed } from '@styles/vars';

export const SummaryContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity ${transitionSpeed};
    opacity: ${props => props.opened ? '1' : '.9'}
`;

export const SummaryContent = styled.div`
    display: flex;
`;

export const SummaryMain = styled.div`
    width: 100%;
`;

export const SummaryHeading = styled.h3`
    font-size: ${rem(14)};
`;

export const StyledBox = styled(Box)`
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

export const summaryParagraph = `
    margin-top: ${rem(3)};
`;