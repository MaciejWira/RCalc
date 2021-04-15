import styled from 'styled-components';

export const H2 = styled.h2`
    margin-bottom: ${props => props.theme.rem(20)};
    font-size: ${props => props.theme.rem(24)};
    color: white;
    display: flex;
    align-items: center;
    white-space: nowrap;
`;