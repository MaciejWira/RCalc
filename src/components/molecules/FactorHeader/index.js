import { H3 } from '@atoms/H3';
import Button from '@atoms/Button';
import { StyledFactorHeader, Buttons } from './styled';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { translations } from '@config/initialSegment/translations';
import { margin } from '@organisms/Segment/helpers/styled';
import { rem } from '@styles/functions';

const FactorHeader = ({ isActive, factorName, removeHandler, resetHandler, buttonStyle }) => {

    const { t } = useTranslations( translations, content );

    return(
        <StyledFactorHeader isActive={isActive}>
            <H3>{t[factorName]}</H3>
            { !removeHandler ? null : (
                <Buttons>
                    <Button
                        style={buttonStyle}
                        type='padded'
                        onClick={resetHandler}>
                        {t.reset}
                    </Button>
                    <Button
                        style={{ ...buttonStyle, marginLeft: rem(margin)}}
                        type='padded color-primary'
                        onClick={removeHandler}>
                        {t.deactivate}
                    </Button>
                </Buttons>
            )}
        </StyledFactorHeader>
    )
}

export default FactorHeader;