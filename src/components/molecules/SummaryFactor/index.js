import React from 'react';
import { useCalc } from '@organisms/Fields/useCalc';
import { useTranslations } from '@translations/useTranslations';
import { translations } from '@helpers/initialSegment';
import { Paragraph, TextBold } from '@atoms/textComponents';
import { summaryParagraph } from '@organisms/Summary/styled';

const SummaryFactor = ({ factor, mainFactor = factor, opened }) => {

    const { valueHandler } = useCalc(factor, mainFactor);
    const { t } = useTranslations(translations);

    const units = factor.units.map((unit, index) => (
        <span key={unit.name}>{valueHandler(unit, index)}&nbsp;{unit.unit} </span>
    ));

    return(
        <Paragraph
            key={factor.name} 
            addStyle={summaryParagraph}
            size={opened ? '' : 'tiny'}>
            <TextBold>{t[factor.name]}:</TextBold> {units}
        </Paragraph>
    );

}

export default SummaryFactor;