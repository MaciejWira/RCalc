import React from 'react';
import { useStore } from '@store/store';
import { SET_LANG } from '@store/actions';
import { languages } from './languages';
import Button from '@atoms/Button';
import styled from 'styled-components';

const StyledLangSwitcher = styled.div`
    display: flex;
`;

const LangSwitcher = () => {

    const { dispatch } = useStore();

    const langHandler = payload => {
        dispatch({ type: SET_LANG, payload })
    };

    const buttons = languages.map( lang => (
        <Button 
            type='round'
            onClick={() => langHandler(lang.slug)}>
            {lang.slug}
        </Button>
    ))

    return(
        <StyledLangSwitcher>
            {buttons}
        </StyledLangSwitcher>
    );

}

export default LangSwitcher;