import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import Input from '@atoms/Input';
import { StyledParagraph } from './styled';
import { RiWhatsappLine, RiFacebookFill, RiGoogleFill } from 'react-icons/ri';
import Button from '@atoms/Button';
import { Container, Buttons } from './styled';

const Share = ({ urlSearch }) => {

    const { t } = useTranslations(content);
    const path = window.location.origin + window.location.pathname + urlSearch;

    return ( 
        <Container>
            <StyledParagraph>{t.copyLink}:</StyledParagraph>
            <Input
                readOnly
                value={path} />
            <StyledParagraph>{t.shareWith}:</StyledParagraph>
            <Buttons>
                <Button
                    type='round'
                    as='a'
                    href={`whatsapp://send?text=${urlSearch}`}
                    target="_blank"
                    >
                    <RiWhatsappLine size="80%" />
                </Button>
                <Button
                    type='round'
                    as='a'
                    href={`https://www.facebook.com/sharer/sharer.php?u=www.${window.location.host + window.location.pathname + urlSearch}`}
                    target="_blank"
                    >
                    <RiFacebookFill size="80%" />
                </Button>
                <Button
                    type='round'
                    as='a'
                    href={`https://mail.google.com/mail/u/0/?tf=cm&su=${t.mailSubject}&body=${path}`}
                    target="_blank"
                    >
                    <RiGoogleFill size="80%" />
                </Button>
            </Buttons>
        </Container>
     );
}
 
export default Share;