import { useState } from 'react';
import { useStore } from '@store/store';
import { SET_LANG } from '@store/actions';
import { languages } from './languages';
import { StyledLangSwitcher } from './styled';
import { StyledButton, DummyButton } from './styled';

const LangSwitcher = () => {

    const { dispatch, globalState : { lang } } = useStore();
    const [ opened, setOpened ] = useState(false);

    const langHandler = langSlug => {
        if ( langSlug === lang ){
            setOpened(prev => !prev);
        } else {
            setOpened(false);
            dispatch({ type: SET_LANG, payload: langSlug });
        }
    };

    const buttons = languages.map( (language, index) => (
            <StyledButton 
                type='round'
                key={language.slug}
                position={index}
                $opened={opened}
                $active={language.slug === lang}
                onClick={() => langHandler(language.slug)}>
                {language.slug}
            </StyledButton>
        ));

    return(
        <StyledLangSwitcher>
            <DummyButton type='round' />
            {buttons}
        </StyledLangSwitcher>
    );

}

export default LangSwitcher;