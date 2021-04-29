import styled from 'styled-components';
import { rem } from '@styles/functions';
import { rowMargin } from '@styles/grid';

const Container = styled.div`
    max-width: ${rem(1200)};
    padding-left: ${rem(rowMargin)};
    padding-right: ${rem(rowMargin)};
    margin-left: auto;
    margin-right: auto;
`;

export default Container;