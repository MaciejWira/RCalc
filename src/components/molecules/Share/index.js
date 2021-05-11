import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import Input from '@atoms/Input';
import { StyledParagraph } from './styled';

const Share = ({ urlSearch }) => {

    const { t } = useTranslations(content);

    return ( 
        <>
            <StyledParagraph>{t.copyLink}:</StyledParagraph>
            <Input value={window.location.origin + window.location.pathname + urlSearch} />
        </>
     );
}
 
export default Share;