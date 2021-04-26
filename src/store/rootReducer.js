import { SET_LANG, SET_THEME, SET_MODAL } from './actions';

export const rootReducer = (state, action) => {

    switch( action.type ){

        case SET_LANG:
            return { ...state, lang: action.payload };

        case SET_THEME:
            const theme = action.payload ? action.payload : ( state.theme === 'dark' ? 'light' : 'dark' );
            return { ...state, theme };

        case SET_MODAL:
            const modal = { ...state.modal };
            if ( action.payload.type !== undefined ) modal.type = action.payload.type;
            // not null nor undefined
            modal.opened = action.payload.opened ?? modal.opened;
            if ( action.payload.content ) modal.content = action.payload.content;
            return { ...state, modal };

        default:
            return state;

    }


}