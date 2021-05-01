import React from 'react';
import { H3 } from '@atoms/H3';
import Button from '@atoms/Button';
import { StyledFactorHeader, Buttons } from './styled';
import { MarginedButton } from '@organisms/Segment/helpers/styled';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { translations } from '@helpers/initialSegment';

const FactorHeader = ({ isActive, factorName, removeHandler, resetHandler, buttonStyle }) => {

    const { t } = useTranslations( translations, content );

    return(
        <StyledFactorHeader isActive={isActive}>
            <H3>{t[factorName]}</H3>
            { !removeHandler ? null : (
                <Buttons>
                    <MarginedButton
                        style={buttonStyle}
                        type='padded'
                        onClick={resetHandler}>
                        {t.reset}
                    </MarginedButton>
                    <Button
                        style={buttonStyle}
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