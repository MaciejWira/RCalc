import React from 'react';
import Button from '@atoms/Button';
import { useStore } from '@store/store';
import { SET_THEME } from '@store/actions';

const ThemeSwitcher = () => {

    const { dispatch } = useStore();

    return(
        <Button onClick={() => dispatch({ type: SET_THEME })}>
            t
        </Button>
    );

}

export default ThemeSwitcher;