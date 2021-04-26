import styled from 'styled-components';
import { rem } from '@styles/functions';
import Box from '@layouts/Box/index';
import { transitionSpeed, ziHeader } from '@styles/vars';
import { relative } from '@styles/mixins';

export const SummaryContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${ziHeader};
    transition: opacity ${transitionSpeed};
    background-color: ${props => props.theme.colorBack};
    opacity: ${props => props.opened ? '1' : '.9'}
`;

export const SummaryContent = styled.div`
    display: flex;
    ${relative}
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