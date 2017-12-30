import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppContainer from 'containers/AppContainer';
import HomeContainer from 'containers/HomeContainer';
import AuthorizedRoute from 'containers/AuthorizedRoute';
import AppConfig from 'firebase/Fire';
import {store, persistor} from 'redux/store/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react'
import registerServiceWorker from 'registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'styles/index.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
            <Switch>
                <AuthorizedRoute path="/app" component={AppContainer} appConfig={AppConfig}/>
                <Route path="/" render={(props) => {return <HomeContainer appConfig={AppConfig}></HomeContainer>}} />
            </Switch>
        </BrowserRouter>
        </PersistGate>
    </Provider>

    , document.getElementById('root'));

registerServiceWorker();
