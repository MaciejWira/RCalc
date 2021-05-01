import styled from 'styled-components';
import { rem } from '@styles/functions';
import { rowMargin, gutter } from '@styles/grid';

const StyledRow = styled.div`
    display: flex;
    padding-left: ${rem(rowMargin - gutter)};
    padding-right: ${rem(rowMargin - gutter)};
    margin-left: ${rem(-rowMargin)};
    margin-right: ${rem(-rowMargin)};
`;

const Row = ({ children }) => (
        <StyledRow>
            {children}
        </StyledRow>
);
 
export default Row;