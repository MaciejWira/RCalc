import styled from 'styled-components';

const Container = styled.div`
    max-width: ${props => props.theme.rem(1200)};
    padding-left: ${props => props.theme.rem(25)};
    padding-right: ${props => props.theme.rem(25)};
    margin-left: auto;
    margin-right: auto;
`;

export default Container;