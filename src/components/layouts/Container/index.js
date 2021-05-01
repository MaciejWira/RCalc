import styled from 'styled-components';
import { rem } from '@styles/functions';
import { rowMargin, rowMarginMd } from '@styles/grid';
import { bp } from '@styles/functions';

const Container = styled.div`
    max-width: ${rem(1200)};
    padding-left: ${rem(rowMargin)};
    padding-right: ${rem(rowMargin)};
    margin-left: auto;
    margin-right: auto;
    ${bp('md', `
        padding-left: ${rem(rowMarginMd)};
        padding-right: ${rem(rowMarginMd)};
    `)}
`;

export default Container;