import styled from 'styled-components';
import { rem } from '@styles/functions';
import Container from '@layouts/Container';
import Column from '@layouts/Column/index';
import { ziHeader } from '@styles/vars';
import { bp } from '@styles/functions';
import { gutter } from '@styles/grid';

export const StyledCalculator = styled(Container)`
  padding-top: ${rem(25)};
`;

export const SegmentsColumn = styled(Column)`
    flex-grow: 1;
    ${bp('md', `
        min-width: 65%;
    `)};
    ${bp('lg', `
    min-width: 60%;
`)}
`;

export const SummaryColumn = styled(Column)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${ziHeader};
    padding-left: 0;
    padding-right: 0;
    ${bp('md', `
        padding-left: ${rem(gutter)};
        padding-right: ${rem(gutter)};
        position: relative;
        left: auto;
        right: auto;
        bottom: auto;
        z-index: 0;
        min-width: 35%
    `)}
    ${bp('lg', `
        min-width: 40%
    `)}
`;