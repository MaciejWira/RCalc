import React from 'react';
import { useSummary } from './useSummary';
import { SummaryContainer, SummaryContent, SummaryMain, ContainerBox, SummaryParagraph, SummaryHeading, ValueParagraph, ContentBox, Buttons, SummaryHeadingMini, ButtonUp, ButtonDown, SegmentsWrapper } from './styled';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import SummarySegment from '@organisms/SummarySegment/index';
import { TextBold } from '@atoms/textComponents';

const Summary = ({ segments }) => {

  const { summarySegment, summaryHandler, summaryOpened, t, scrollPosition } = useSummary(segments);

  return(
      <SummaryContainer
        summaryOpened={summaryOpened}
        scrollPosition={scrollPosition}>
        <ContainerBox>
          <SummaryHeading>{t.summary}</SummaryHeading>
          <ContentBox>
            <SummaryContent>
              <SummaryMain>
                  <SummaryHeadingMini>{t.summary}</SummaryHeadingMini>
                  <SegmentsWrapper summaryOpened={summaryOpened}>
                    <SummaryParagraph opened={summaryOpened}>
                      <TextBold>{t.segmentsAmount}:</TextBold>&nbsp;
                      <ValueParagraph opened={summaryOpened}>
                        {segments.length}
                      </ValueParagraph>
                    </SummaryParagraph>
                    <SummarySegment
                      opened={summaryOpened}
                      summarySegment={summarySegment} />
                  </SegmentsWrapper>
              </SummaryMain>
              <Buttons>
                <ButtonUp 
                    type='round font-big'
                    summaryOpened={summaryOpened}
                    onClick={summaryHandler('plus')}>
                      <RiArrowUpSLine />
                </ButtonUp>
                <ButtonDown
                    type='round font-big'
                    summaryOpened={summaryOpened}
                    onClick={summaryHandler('minus')}>
                      <RiArrowDownSLine />
                </ButtonDown>
              </Buttons>
            </SummaryContent>
          </ContentBox>
        </ContainerBox>
      </SummaryContainer>
  )
};

export default Summary;
