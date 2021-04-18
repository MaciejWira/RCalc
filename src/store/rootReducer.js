import { SET_LANG, SET_THEME } from './actions';

export const rootReducer = (state, action) => {

    switch( action.type ){

        case SET_LANG:
            return { ...state, lang: action.payload };

        case SET_THEME:
            return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };

        default:
            return state;

    }


}