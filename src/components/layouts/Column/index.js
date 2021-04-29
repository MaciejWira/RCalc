import styled from 'styled-components';
import { rem } from '@styles/functions';
import { gutter } from '@styles/grid';

const StyledColumn = styled.div`
    padding-left: ${rem(gutter)};
    padding-right: ${rem(gutter)};
`;

const Column = ({ children, ...others }) => (
        <StyledColumn {...others}>
            {children}
        </StyledColumn>
);
 
export default Column;