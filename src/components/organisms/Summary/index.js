import React from 'react';
import { useSummary } from './useSummary';
import { SummaryContainer, SummaryContent, SummaryMain, StyledBox } from './styled';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import Button from '@atoms/Button';
import SummarySegment from '@organisms/SummarySegment/index';
import { Paragraph, TextBold } from '@atoms/textComponents';

const Summary = ({ segments }) => {

  const { summarySegment, summaryHandler, summaryOpened, t } = useSummary(segments);

  return(
      <SummaryContainer opened={summaryOpened}>
        <StyledBox>
          <SummaryContent>
            <SummaryMain>
              <Paragraph
                size={summaryOpened ? '' : 'tiny'}>
                <TextBold>{t.segmentsAmount}:</TextBold> {segments.length}
              </Paragraph>
              <SummarySegment
                opened={summaryOpened}
                summarySegment={summarySegment} />
            </SummaryMain>
            <Button
                type='round font-big'
                onClick={summaryHandler}>
                  {summaryOpened ? (<RiArrowDownSLine />) : (<RiArrowUpSLine />)}
            </Button>
          </SummaryContent>
        </StyledBox>
      </SummaryContainer>
  )
};

export default Summary;
