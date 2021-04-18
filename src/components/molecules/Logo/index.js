import React from 'react';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { H1 } from '@atoms/H1';

const Logo = () => {

    const { t } = useTranslations(content);

    return(
        <H1>{t.heading}</H1>
    );

}

export default Logo;