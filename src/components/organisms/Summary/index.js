import { useSummary } from './useSummary';
import { SummaryContainer,
  SummaryContent,
  SummaryMain,
  ContainerBox,
  SummaryParagraph,
  ValueParagraph,
  ContentBox,
  Buttons,
  ButtonUp,
  ButtonDown,
  SegmentsWrapper } from './styled';
import SummarySegment from '@organisms/SummarySegment/index';
import { TextBold } from '@atoms/textComponents';
import SummaryHeader from '@molecules/SummaryHeader/index';

const Summary = ({ segments }) => {

  const { summarySegment, summaryHandler, summaryOpened, t, scrollPosition, shareHandler } = useSummary(segments);

  return(
      <SummaryContainer
        summaryOpened={summaryOpened}
        scrollPosition={scrollPosition}>
        <ContainerBox>
          <SummaryHeader
            shareHandler={shareHandler}
            heading={t.summary}
            />
          <ContentBox>
            <SummaryContent>
              <SummaryMain>
                  <SummaryHeader
                    mobile={true}
                    heading={t.summary}
                    shareHandler={shareHandler}
                    />
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
