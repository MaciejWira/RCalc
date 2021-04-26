import React from 'react';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';
import { H1 } from '@atoms/H1';
import styled from 'styled-components';
import { transitionSpeed } from '@styles/vars';

const Logo = ({ ...props }) => {

    const { t } = useTranslations(content);

    return(
        <H1 {...props}>{t.heading}</H1>
    );

}

export default styled(Logo)`
    transition: color ${transitionSpeed};
`;