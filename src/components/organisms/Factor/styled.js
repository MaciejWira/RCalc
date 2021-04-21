import styled from 'styled-components';
import { rem } from '@styles/functions';

export const StyledFactor = styled.div`
    position: relative;
    text-align: center;
    margin-bottom: ${rem(45)};
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
    padding-top: ${rem(10)};
    display: flex;
    justify-content: flex-start;
`;