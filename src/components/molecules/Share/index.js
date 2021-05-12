import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { StyledParagraph, StyledInput } from './styled';
import { RiWhatsappLine, RiFacebookFill, RiGoogleFill } from 'react-icons/ri';
import Button from '@atoms/Button';
import { Container, Buttons } from './styled';

const Share = ({ urlSearch }) => {

    const { t } = useTranslations(content);
    const path = window.location.origin + window.location.pathname + urlSearch;
    const wwwPath = window.location.host + window.location.pathname + urlSearch;

    return ( 
        <Container>
            <StyledParagraph>{t.copyLink}:</StyledParagraph>
            <StyledInput
                readOnly
                onFocus={e => console.log(e.target.select())}
                value={path} />
            <StyledParagraph>{t.shareWith}:</StyledParagraph>
            <Buttons>
                <Button
                    type='round round-grow-sm'
                    as='a'
                    href={`whatsapp://send?text=${encodeURIComponent(path)}`}
                    target="_blank"
                    >
                    <RiWhatsappLine size="80%" />
                </Button>
                <Button
                    type='round round-grow-sm'
                    as='a'
                    href={`https://www.facebook.com/sharer/sharer.php?u=www.${encodeURIComponent(wwwPath)}`}
                    target="_blank"
                    >
                    <RiFacebookFill size="80%" />
                </Button>
                <Button
                    type='round round-grow-sm'
                    as='a'
                    href={`https://mail.google.com/mail/u/0/?tf=cm&su=${t.mailSubject}&body=${encodeURIComponent(path)}`}
                    target="_blank"
                    >
                    <RiGoogleFill size="80%" />
                </Button>
            </Buttons>
        </Container>
     );
}
 
export default Share;