import styled from 'styled-components';

export const H3 = styled.h3`
    text-align: left;
    font-size: ${props => props.theme.rem(12)};
    text-transform: uppercase;
    font-weight: 400;
    padding-right: ${props => props.theme.rem(15)};
`;