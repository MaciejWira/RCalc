import { rem } from '@styles/functions';
import { useStore } from '@store/store';
import Standards from '@organisms/Standards/index';
import { RiCloseFill } from 'react-icons/ri';
import { SET_MODAL } from '@store/actions';
import { ModalContainer, ModelMain, ModalBox, ModelContent, CloseButton } from './styled';
import Share from '@molecules/Share/index';

const Modal = () => {

  const { globalState: { modal: { type, opened, content } }, dispatch } = useStore();

  let _content = null;

  if ( type === 'standards' ){
    _content = (
      <ModelContent>
        <Standards factor={content.factor} handler={content.handler}/>
      </ModelContent>)
  } else if ( type === 'share' ){
    _content = (
      <ModelContent>
        <Share urlSearch={content.urlSearch} />
      </ModelContent>)
  } 

  return(
    <ModalContainer opened={opened}>
      <ModelMain>
        <ModalBox>
          {_content}
        </ModalBox>
        <CloseButton
          onClick={() => dispatch({ type: SET_MODAL, payload: { opened: false }})}
          type="round">
          <RiCloseFill size={rem(20)}/>
        </CloseButton>
      </ModelMain>
    </ModalContainer>
  );

};

export default Modal;
