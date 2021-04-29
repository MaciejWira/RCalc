import styled from 'styled-components';
import { rem } from '@styles/functions';
import Container from '@layouts/Container';
import Column from '@layouts/Column/index';
import { ziHeader } from '@styles/vars';
import { bp } from '@styles/functions';

export const StyledCalculator = styled(Container)`
  padding-top: ${rem(25)};
`;

export const SegmentsColumn = styled(Column)`
    flex-grow: 1;
`;

export const SummaryColumn = styled(Column)`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${ziHeader};
    ${bp('md', `
        position: relative;
        left: auto;
        right: auto;
        bottom: auto;
        z-index: 0;
    `)}
`;