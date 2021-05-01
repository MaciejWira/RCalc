import styled from 'styled-components';
import { rem } from '@styles/functions';
import { relative } from '@styles/mixins';

export const StyledFactor = styled.div`
    position: relative;
    text-align: center;
    text-align: left;
    ${props => {
        if ( props.isActive ){
            return`
                padding-bottom: ${rem(15)};
            `
        } else {
            return`
                padding-bottom: ${rem(5)};
            `
        }
    }}
    ${relative}
`;

export const FieldsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${props => {
        if ( props.isActive ){
            return`
                margin-bottom: ${rem(10)};
            `
        }
    }}
`;