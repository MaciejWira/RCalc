import { useTranslations } from '@translations/useTranslations';
import { translations } from '@config/initialSegment/translations';

import { ButtonWrapper, StyledButton } from './styled';
import { rem } from '@styles/functions';
import { useStore } from '@store/store';
import { SET_MODAL } from '@store/actions';

const Standards = ({ factor, handler }) => {

  const { t } = useTranslations(translations);
  const globalDispatch = useStore().dispatch;

  const setStandard = standard => {
    handler({
      factorName: factor?.name,
      value: standard.value
    });
    globalDispatch({ 
      type: SET_MODAL, 
      payload: { opened: false }
    })
  }

  const buttons = factor?.standards?.map(standard => (
    <StyledButton
      key={standard.name}
      additionalStyles={`margin-bottom: ${rem(10)};`}
      onClick={() => setStandard(standard)}
      type="padded">
      {t[standard.name]}
    </StyledButton>
  ))

  return(
    <ButtonWrapper>
      {buttons}
    </ButtonWrapper>
  )
};

export default Standards;
