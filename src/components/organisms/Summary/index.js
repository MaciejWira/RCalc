import { useSummary } from './useSummary';
import { SummaryContainer, SummaryContent, SummaryMain, ContainerBox, SummaryParagraph, SummaryHeading, ValueParagraph, ContentBox, Buttons, SummaryHeadingMini, ButtonUp, ButtonDown, SegmentsWrapper } from './styled';
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
                    dir='up'
                    $summaryOpened={summaryOpened}
                    onClick={summaryHandler('plus')} />
                <ButtonDown 
                    dir='down'
                    $summaryOpened={summaryOpened}
                    onClick={summaryHandler('minus')} />
              </Buttons>
            </SummaryContent>
          </ContentBox>
        </ContainerBox>
      </SummaryContainer>
  )
};

export default Summary;
