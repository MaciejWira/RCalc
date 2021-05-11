import { H2 } from '@atoms/H2';
import { RiShareLine } from 'react-icons/ri';
import Button from '@atoms/Button';
import styled from 'styled-components';
import { rem, bp } from '@styles/functions';
import { relative } from '@styles/mixins';

const flexMixin = `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Container = styled.div`
    ${props => `
        ${props.$mobile ? flexMixin : 'display: none'};
        margin-right: ${rem(7)};
        ${bp('md', `
            ${!props.$mobile ? flexMixin : 'display: none'};
            ${relative};
            margin-bottom: ${rem(20)}
        `)}
    `};
`;

const Heading = styled(H2)`
    font-size: ${rem(20)};
`;

const SummaryHeader = ({ mobile = false, heading, shareHandler }) => {

    return(
        <Container $mobile={mobile}>
            <Heading>{heading}</Heading>
            <Button
                onClick={shareHandler}
                type='round'>
                <RiShareLine size="75%"/>
            </Button>
        </Container>
    )

};
 
export default SummaryHeader;