import { createStore } from 'redux';

const INITIAL_STATE = {
    lang: 'en'
};

const rootReducer = ( state = INITIAL_STATE, action ) => {

    switch (action.type) {
        case 'LANG':
            return {
                ...state, 
                lang: action.payload
            }
    
        default:
            return state;
    }

}

const store = createStore(rootReducer);

export default store;