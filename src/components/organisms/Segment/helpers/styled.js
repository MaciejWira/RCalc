import styled from 'styled-components';

export const StyledSegment = styled.div`
    margin-bottom: ${props => props.theme.rem(35)};
    border: solid ${props => props.theme.rem(10)} ${props => props.theme.colorSubprimary};
    padding: ${props => props.theme.rem(20)} ${props => props.theme.rem(25)};
    border-radius: ${props => props.theme.rem(15)};
`