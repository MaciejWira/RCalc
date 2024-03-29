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

  const { 
    summarySegment, 
    summaryHandler, 
    summaryOpened, 
    t, 
    scrollPosition, 
    segmentsLength,
    urlSearch } = useSummary(segments);

  return(
      <SummaryContainer
        summaryOpened={summaryOpened}
        scrollPosition={scrollPosition}>
        <ContainerBox>
          <SummaryHeader
            heading={t.summary}
            urlSearch={urlSearch}
            />
          <ContentBox>
            <SummaryContent>
              <SummaryMain>
                  <SummaryHeader
                    mobile={true}
                    heading={t.summary}
                    urlSearch={urlSearch}
                    />
                  <SegmentsWrapper summaryOpened={summaryOpened}>
                    <SummaryParagraph opened={summaryOpened}>
                      <TextBold>{t.segmentsAmount}:</TextBold>&nbsp;
                      <ValueParagraph opened={summaryOpened}>
                        {segmentsLength}
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
