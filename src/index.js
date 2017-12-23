import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import AppConfig from './Fire';
import {store} from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App appConfig={AppConfig}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
