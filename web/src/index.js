import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, 
document.getElementById('root'));
serviceWorker.unregister();
