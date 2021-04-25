import React from 'react';
import Segments from '@organisms/Segments/index';
import Summary from "@organisms/Summary";
import Button from '@atoms/Button';
import Container from '@layouts/Container';
import styled from 'styled-components';
import { rem } from '@styles/functions';

const StyledCalculator = styled(Container)`
  padding-top: ${rem(25)};
`;

const CalculatorComponent = ({ 
    segments, 
    segmentUpdater, 
    buttonHandler, 
    buttonText,
    segmentRemover 
}) => (
    <StyledCalculator>
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
        <Summary segments={segments}/>
    </StyledCalculator>
);

export default CalculatorComponent;