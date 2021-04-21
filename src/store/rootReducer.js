import { SET_LANG, SET_THEME } from './actions';

export const rootReducer = (state, action) => {

    switch( action.type ){

        case SET_LANG:
            return { ...state, lang: action.payload };

        case SET_THEME:
            const theme = action.payload ? action.payload : ( state.theme === 'dark' ? 'light' : 'dark' );
            return { ...state, theme };

        default:
            return state;

    }


}