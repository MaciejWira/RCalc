import React from 'react';
import Segments from '@organisms/Segments/index';
import Summary from "@organisms/Summary";
import Button from '@atoms/Button';
import Row from '@layouts/Row/index';
import { StyledCalculator, SummaryColumn, SegmentsColumn } from './styled';

const CalculatorComponent = ({ 
    segments, 
    segmentUpdater, 
    buttonHandler, 
    buttonText,
    segmentRemover 
}) => (
    <StyledCalculator>
        <Row>
            <SegmentsColumn>
                <Segments 
                    segments={segments}
                    segmentUpdater={segmentUpdater}
                    segmentRemover={segmentRemover}
                    />
                <Button
                    type='padded color-primary'
                    onClick={buttonHandler}>
                    {buttonText}
                </Button>
            </SegmentsColumn>
            <SummaryColumn>
                <Summary segments={segments}/>
            </SummaryColumn>
        </Row>
    </StyledCalculator>
);

export default CalculatorComponent;