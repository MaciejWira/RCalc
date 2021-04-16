import { SET_LANG } from './actions';

export const rootReducer = (state, action) => {

    switch( action.type ){

        case SET_LANG:
            return { ...state, lang: action.payload };

        default:
            return state;

    }


}