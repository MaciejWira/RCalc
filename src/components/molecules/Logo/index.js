import React from 'react';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { StyledLogo, Calc, Run } from './styled';

const Logo = () => {

    const { t } = useTranslations(content);

    return(
        <StyledLogo>
            <Run>RUN</Run>
            <Calc>CALC</Calc>
        </StyledLogo>
    );

}

export default Logo;