import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from '@store/store';
import { initialState } from '@store/initialState';
import { rootReducer } from '@store/rootReducer';

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider 
            initialState={initialState}
            reducer={rootReducer}
            >
            <App />
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
