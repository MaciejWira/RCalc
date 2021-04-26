import styled from 'styled-components';
import { rem } from '@styles/functions';
import { relative } from '@styles/mixins';

export const StyledFactor = styled.div`
    position: relative;
    text-align: center;
    padding-bottom: ${rem(15)};
    text-align: left;
    ${relative}
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${rem(10)};
`;