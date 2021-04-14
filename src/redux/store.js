import { createStore, combineReducers } from 'redux';
import { lang } from './reducers/langReducer';

const rootReducer = combineReducers({
    lang
})

const store = createStore(rootReducer);

export default store;