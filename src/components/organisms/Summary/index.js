import React from 'react';
import { useSummary } from './useSummary';
import { SummaryContainer, SummaryContent, SummaryMain, StyledBox, StyledButton, SummaryParagraph, SummaryHeading, ValueParagraph } from './styled';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import SummarySegment from '@organisms/SummarySegment/index';
import { TextBold } from '@atoms/textComponents';

const Summary = ({ segments }) => {

  const { summarySegment, summaryHandler, summaryOpened, t, scrollPosition } = useSummary(segments);

  return(
      <SummaryContainer scrollPosition={scrollPosition}>
        <StyledBox>
          <SummaryContent>
            <SummaryMain>
              <SummaryHeading>{t.summary}</SummaryHeading>
              <SummaryParagraph opened={summaryOpened}>
                <TextBold>{t.segmentsAmount}:</TextBold>&nbsp;
                <ValueParagraph opened={summaryOpened}>
                  {segments.length}
                </ValueParagraph>
              </SummaryParagraph>
              <SummarySegment
                opened={summaryOpened}
                summarySegment={summarySegment} />
            </SummaryMain>
            <StyledButton
                type='round font-big'
                onClick={summaryHandler}>
                  {summaryOpened ? (<RiArrowDownSLine />) : (<RiArrowUpSLine />)}
            </StyledButton>
          </SummaryContent>
        </StyledBox>
      </SummaryContainer>
  )
};

export default Summary;
