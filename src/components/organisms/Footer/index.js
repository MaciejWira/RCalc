import styled from 'styled-components';
import Container from '@layouts/Container';
import Logo from '@molecules/Logo/index';
import Row from '@layouts/Row/index';
import Column from '@layouts/Column/index';
import { rem, bp } from '@styles/functions';
import { rgba } from 'polished';
import { Paragraph } from '@atoms/textComponents';
import A from '@atoms/A';

const StyledContainer = styled.div`
    border-top: solid ${rem(1)} ${props => rgba(props.theme.colorFront, .25)};
    padding-top: ${rem(20)};
`;
    
const StyledParagraph = styled(Paragraph)`
    margin-top: ${rem(7)};
    ${bp('lg',`
        margin-top: ${rem(10)}
    `)};
`

const Footer = () => {

    return (
        <Container>
            <StyledContainer>
                <Row>
                    <Column>
                        <Logo />
                        <StyledParagraph>
                            <A href='mailto:wira.maciej@gmail.com'>
                                wira.maciej@gmail.com
                            </A>
                        </StyledParagraph>
                        <StyledParagraph>
                            Copyright © 2021 Maciej Wira. All rights reserved.
                        </StyledParagraph>
                    </Column>
                </Row>
            </StyledContainer>
        </Container>
    );
}
 
export default Footer;