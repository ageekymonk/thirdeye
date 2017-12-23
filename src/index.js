import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppContainer from 'containers/AppContainer';
import AppConfig from 'firebase/Fire';
import {store} from 'redux/store/configureStore';
import registerServiceWorker from 'registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer appConfig={AppConfig}/>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

registerServiceWorker();
