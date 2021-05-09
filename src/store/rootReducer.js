import { SET_LANG, SET_THEME, SET_MODAL } from './actions';
import { LSTheme } from '@src/app/localStorage';

export const rootReducer = (state, action) => {

    switch( action.type ){

        case SET_LANG:
            return { ...state, lang: action.payload };

        case SET_THEME:
            const theme = action.payload ? action.payload : ( state.theme === 'dark' ? 'light' : 'dark' );
            localStorage.setItem(LSTheme, theme);
            return { ...state, theme };

        case SET_MODAL:
            const modal = { ...state.modal };
            const { type, opened, content } = action.payload;
            if ( type !== undefined ) modal.type = type;
            // not null nor undefined
            modal.opened = opened ?? modal.opened;
            if ( content ) modal.content = content;
            return { ...state, modal };

        default:
            return state;

    }


}