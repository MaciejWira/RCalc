import { Fragment } from 'react';
import { useCalc } from '@organisms/Fields/useCalc';
import { useTranslations } from '@translations/useTranslations';
import { translations } from '@helpers/initialSegment';
import { TextBold } from '@atoms/textComponents';
import { SummaryParagraph, ValueParagraph } from '@organisms/Summary/styled';
import styled from 'styled-components';
import { bp, rem } from '@styles/functions';
import { ColoredBold } from '@atoms/textComponents';

const StyledTextBold = styled(TextBold)`
    ${bp('md', `
        display: block;
        margin-bottom: ${rem(2)}
    `)}
`;

const SummaryFactor = ({ factor, mainFactor = factor, opened }) => {

    const { valueHandler } = useCalc(factor, mainFactor);
    const { t } = useTranslations(translations);

    const units = factor.units.map((unit, index) => (
        <Fragment key={unit.name}>
            <ValueParagraph opened={opened}>
                {valueHandler(unit, index)}
            </ValueParagraph>&nbsp;<ColoredBold>{unit.unit} </ColoredBold>
        </Fragment>
    ));

    return(
        <SummaryParagraph
            key={factor.name} 
            opened={opened}>
            <StyledTextBold>{t[factor.name]}:</StyledTextBold> {units}
        </SummaryParagraph>
    );

}

export default SummaryFactor;