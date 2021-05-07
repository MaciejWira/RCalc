import React from 'react';
import Segments from '@organisms/Segments/index';
import Summary from "@organisms/Summary";
import Button from '@atoms/Button';
import Row from '@layouts/Row/index';
import { StyledCalculator, SummaryColumn, SegmentsColumn } from './styled';
import { useTranslations } from '@translations/useTranslations';
import { content } from './content';

const CalculatorComponent = ({ 
    segmentsState, 
    segmentsActions,
}) => {

    const { t } = useTranslations(content);

    return(
        <StyledCalculator>
            <Row>
                <SegmentsColumn>
                    <Segments 
                        segmentsState={segmentsState}
                        segmentsActions={segmentsActions}
                        />
                    <Button
                        type='padded color-primary'
                        onClick={segmentsActions.ADD}>
                        {t.addSegment}
                    </Button>
                </SegmentsColumn>
                <SummaryColumn>
                    <Summary segments={segmentsState.segments}/>
                </SummaryColumn>
            </Row>
        </StyledCalculator>
    )
};

export default CalculatorComponent;